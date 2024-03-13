import React from 'react';
import { inputStyle, buttonStyle } from '@/styles/styles';

function TodoForm() {
  return (
    <section className="flex justify-center bg-rose-50">
      <form className="flex gap-4 m-10">
        <input style={inputStyle} placeholder="제목" />
        <input style={inputStyle} placeholder="내용" />
        <button style={buttonStyle}>등록하기</button>
      </form>
    </section>
  );
}

export default TodoForm;
