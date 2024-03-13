'use client';

import React from 'react';
import { buttonStyle } from '@/styles/styles';
import { Todos, UpdatedTodo } from '@/app/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';

function TodoItem({ todoData }: { todoData: Todos[] }) {
  const queryClient = useQueryClient();
  const isDoneMutation = useMutation({
    mutationFn: async (updatedTodo: UpdatedTodo) => {
      try {
        await fetch(`http://localhost:3000/api/todos`, {
          method: 'PATCH',
          body: JSON.stringify({ id: updatedTodo.id, isDone: updatedTodo.isDone })
        });
      } catch (error) {
        alert(`Todo 상태 변경 에러 발생, 다시 시도하세요.`);
        console.log('error', error);
      }
    }
  });

  const toggleIsDone = (id: string, isDone: boolean) => {
    const updatedTodo = {
      id: id,
      isDone: !isDone
    };
    isDoneMutation.mutate(updatedTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['todos'] });
      }
    });
  };
  return (
    <section className="flex flex-col items-center pt-3">
      <ul>
        {todoData.map((item) => (
          <li key={item.id} className="flex mb-2 hover:bg-rose-50">
            <div className="w-[200px]">{item.title}</div>
            <div className="w-[400px]">{item.content}</div>
            <div className="flex gap-2">
              <button style={buttonStyle}>보기</button>
              <button style={buttonStyle} onClick={() => toggleIsDone(item.id, item.isDone)}>
                {item.isDone ? '취소' : '완료'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoItem;
