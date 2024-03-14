import React from 'react';
import { Todos } from '../types';
import { buttonStyle } from '@/styles/styles';
import Link from 'next/link';
import TodoItemSsr from '../components/todoItemSsr';

async function TodosSsrPage() {
  const response = await fetch(`http://localhost:4000/todos`, {
    cache: 'no-cache'
  });
  const data: Todos[] = await response.json();

  const todoList = data.filter((item) => item.isDone === false);
  const doneList = data.filter((item) => item.isDone === true);

  return (
    <section className="flex flex-col items-center bg-rose-50 h-screen">
      <div className="flex flex-col w-[800px] mt-10 p-5 bg-white rounded-xl">
        <h1 className="text-lg text-rose-500 mb-3">✏️ TodoList</h1>
        <TodoItemSsr data={todoList} />
      </div>
      <div className="flex flex-col w-[800px] mt-10 p-5 bg-white rounded-xl">
        <h1 className="text-lg text-rose-500 mb-3">✅ DoneList</h1>
        <TodoItemSsr data={doneList} />
      </div>
      <div className="w-[800px] flex justify-end mt-10">
        <Link href="/report" style={buttonStyle}>
          Todo 통계 보기
        </Link>
      </div>
    </section>
  );
}

export default TodosSsrPage;
