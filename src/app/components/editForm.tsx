'use client';

import { buttonStyle, editInputStyle } from '@/styles/styles';
import React, { useState } from 'react';
import { Todos } from '../types';

function EditForm({
  data,
  setIsEditing
}: {
  data: Todos;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  console.log('받아온 Todo', data);
  const [title, setTitle] = useState(data.title);
  const [content, setContent] = useState(data.content);

  const handleCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!window.confirm(`Todo 수정을 취소하시겠습니까?`)) return;
    setIsEditing(false);
  };

  return (
    <form className="flex gap-5 items-center justify-center">
      <label>제목</label>
      <input style={editInputStyle} value={title} />
      <label>내용</label>
      <input style={editInputStyle} value={content} />
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
