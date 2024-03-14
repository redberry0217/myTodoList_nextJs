'use client';

import { buttonStyle, editInputStyle } from '@/styles/styles';
import React, { useState } from 'react';
import { Todos, editedTodo } from '../types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

function EditForm({
  data,
  setIsEditing,
  id
}: {
  data: Todos;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
}) {
  console.log('받아온 Todo', data);
  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);
  const queryClient = useQueryClient();
  const router = useRouter();

  /** 취소 버튼 클릭 핸들러 */
  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!window.confirm(`Todo 수정을 취소하시겠습니까?`)) return;
    setIsEditing(false);
  };

  /** Todo 수정 Mutation */
  const editMutation = useMutation({
    mutationFn: async (editedTodo: editedTodo) => {
      try {
        await fetch(`http://localhost:3000/api/todos/${id}`, {
          method: 'PATCH',
          body: JSON.stringify(editedTodo)
        });
      } catch (error) {
        console.log('error', error);
      }
    }
  });

  /** 수정 버튼 클릭 핸들러 */
  const handleOnSubmit = () => {
    if (!title || !title) {
      alert(`제목과 내용을 입력해주세요.`);
      return;
    }

    console.log('작성내용', title, content);

    try {
      const editedTodo: editedTodo = {
        title,
        content
      };
      editMutation.mutate(editedTodo, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['todos'] });
          setIsEditing(false);
        }
      });
    } catch (error) {
      alert(`Todo 수정 실패! 다시 시도하세요.`);
    }
  };

  return (
    <form
      className="flex gap-5 items-center justify-center"
      onSubmit={(e) => {
        e.preventDefault();
        handleOnSubmit();
      }}
    >
      <label>제목</label>
      <input style={editInputStyle} value={title} onChange={(e) => setTitle(e.target.value)} />
      <label>내용</label>
      <input style={editInputStyle} value={content} onChange={(e) => setContent(e.target.value)} />
      <div className="flex gap-2">
        <button style={buttonStyle} type="button" onClick={handleCancel}>
          취소
        </button>
        <button style={buttonStyle} type="submit">
          수정
        </button>
      </div>
    </form>
  );
}

export default EditForm;
