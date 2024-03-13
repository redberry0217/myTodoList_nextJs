'use client';

import React from 'react';
import { buttonStyle } from '@/styles/styles';
import { Todos } from '@/app/types';

function TodoItem({ todoData }: { todoData: Todos[] }) {
  return (
    <section className="flex flex-col items-center pt-3">
      <ul>
        {todoData.map((item) => (
          <li key={item.id} className="flex mb-2 hover:bg-rose-50">
            <div className="w-[200px]">{item.title}</div>
            <div className="w-[400px]">{item.content}</div>
            <div className="flex gap-2">
              <button style={buttonStyle}>보기</button>
              <button style={buttonStyle}>{item.isDone ? '취소' : '완료'}</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoItem;
