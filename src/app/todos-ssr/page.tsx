import React from 'react';
import { Todos } from '../types';
import { buttonStyle } from '@/styles/styles';
import { Router } from 'next/router';
import Link from 'next/link';

async function TodosSsrPage() {
  const response = await fetch(`http://localhost:4000/todos`, {
    cache: 'no-cache'
  });
  const data: Todos[] = await response.json();

  const todoList = data.filter((item) => item.isDone === false);
  const doneList = data.filter((item) => item.isDone === true);

  return (
    <section className="flex flex-col items-center bg-rose-50 h-screen">
      <div className="flex flex-col w-[900px] mt-20 p-10 gap-10 bg-white rounded-xl">
        <div>
          <h1 className="text-lg text-rose-500 mb-3">✏️ TodoList</h1>
          <div className="flex mb-2">
            <div className="w-[300px] text-center">제목</div>
            <div className="w-[500px] text-center">내용</div>
          </div>
          <hr />
          {todoList.map((item) => (
            <div key={item.id} className="flex gap-5 justify-center hover:bg-rose-50 p-2">
              <div className="w-[300px]">{item.title}</div>
              <div className="w-[500px]">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-[900px] mt-20 p-10 gap-10 bg-white rounded-xl">
        <div>
          <h1 className="text-lg text-rose-500 mb-3">✅ DoneList</h1>
          <hr />
          {doneList.map((item) => (
            <div key={item.id} className="flex gap-5 justify-center hover:bg-rose-50 p-2">
              <div className="w-[300px]">{item.title}</div>
              <div className="w-[500px]">{item.content}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[900px] flex justify-end mt-10">
        <Link href="/report" style={buttonStyle}>
          Todo 통계 보기
        </Link>
      </div>
    </section>
  );
}

export default TodosSsrPage;
