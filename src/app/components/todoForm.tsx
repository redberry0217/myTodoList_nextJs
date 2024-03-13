'use client';

import React, { useState } from 'react';
import { inputStyle, buttonStyle } from '@/styles/styles';
import { NewTodo } from '@/app/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function TodoForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const queryClient = useQueryClient();

  const writeMutation = useMutation({
    mutationFn: async (newTodo: NewTodo) => {
      try {
        const response = await fetch(`http://localhost:3000/api/todos`, {
          method: 'POST',
          body: JSON.stringify(newTodo)
        });
        console.log(1);
        // const todo = await response.json();
        // console.log('2', todo);
        // return todo;
      } catch (error) {
        console.log('error', error);
      }
    }
  });

  const handleOnSubmit = async () => {
    if (!title || !content) {
      alert(`제목과 내용을 입력해주세요.`);
      return;
    }

    if (!window.confirm(`Todo를 등록하시겠습니까?`)) return;

    try {
      const newTodo: NewTodo = {
        title,
        content,
        isDone: false
      };

      writeMutation.mutate(newTodo, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['todos'] });
          setTitle('');
          setContent('');
        }
      });
    } catch (error) {
      alert(`Todo 등록 실패! 다시 시도하세요.`);
    }
  };

  return (
    <section className="flex justify-center bg-rose-50">
      <form
        className="flex gap-4 m-10"
        onSubmit={(e) => {
          e.preventDefault();
          handleOnSubmit();
        }}
      >
        <input style={inputStyle} placeholder="제목" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input style={inputStyle} placeholder="내용" value={content} onChange={(e) => setContent(e.target.value)} />
        <button type="submit" style={buttonStyle}>
          등록하기
        </button>
      </form>
    </section>
  );
}

export default TodoForm;
