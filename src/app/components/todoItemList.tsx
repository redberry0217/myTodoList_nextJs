'use client';

import React from 'react';
import TodoItem from './todoItem';
import { useQuery } from '@tanstack/react-query';
import { TodoList } from '@/app/types';
import { buttonStyle } from '@/styles/styles';
import { useRouter } from 'next/navigation';

function TodoItemList() {
  const router = useRouter();
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

  const todoList: TodoList = data.filter((item) => !item.isDone);
  const doneList: TodoList = data.filter((item) => item.isDone);

  return (
    <section className="flex flex-col items-center pt-10 gap-y-10">
      <div className="w-[800px] border rounded-xl p-5">
        <h1 className="text-lg text-rose-500 mb-3">✏️ TodoList</h1>
        {todoList.length === 0 ? (
          <div className="text-center">등록된 Todo가 없습니다.</div>
        ) : (
          <TodoItem todoData={todoList} />
        )}
      </div>
      <div className="w-[800px] border rounded-xl p-5">
        <h1 className="text-lg text-rose-500">✅ DoneList</h1>
        {doneList.length === 0 ? (
          <div className="text-center">완료된 Todo가 없습니다.</div>
        ) : (
          <TodoItem todoData={doneList} />
        )}
      </div>
      <div className="w-[800px] flex justify-end">
        <button style={buttonStyle} onClick={() => router.push(`/report`)}>
          Todo 통계 보기
        </button>
      </div>
    </section>
  );
}

export default TodoItemList;
