'use client';

import React from 'react';
import TodoItem from './todoItem';
import { useQuery } from '@tanstack/react-query';
import { TodoList } from '@/app/types';

function TodoItemList() {
  const { data, isLoading } = useQuery<TodoList>({
    queryKey: ['todos'],
    queryFn: async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/todos`);
        const { todosList } = await response.json();
        console.log('받아온 내용', todosList);
        return todosList;
      } catch (error) {
        console.log(`데이터 받아오기 에러`);
        return [];
      }
    }
  });

  if (isLoading) {
    return <div>데이터 로드 중...</div>;
  }
  if (!data) {
    return <div>데이터 불러오기 오류</div>;
  }

  const undoneList: TodoList = data.filter((item) => !item.isDone);
  const doneList: TodoList = data.filter((item) => item.isDone);

  return (
    <section className="flex flex-col items-center pt-10 gap-y-10">
      <div className="w-[800px] border rounded-xl p-5">
        <h1 className="text-lg text-rose-500 mb-3">✏️ TodoList</h1>
        {isLoading ? <div>데이터 로딩....</div> : <TodoItem todoData={undoneList} />}
      </div>
      <div className="w-[800px] border rounded-xl p-5">
        <h1 className="text-lg text-rose-500">✅ DoneList</h1>
        {isLoading ? <div>데이터 로딩....</div> : <TodoItem todoData={doneList} />}
      </div>
    </section>
  );
}

export default TodoItemList;
