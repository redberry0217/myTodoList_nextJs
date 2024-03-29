'use client';

import React from 'react';
import { buttonStyle } from '@/styles/styles';
import { Todos, UpdatedTodo } from '@/app/types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Checked from '../../assets/checked.png';
import Unchecked from '../../assets/unchecked.png';
import Image from 'next/image';
import Link from 'next/link';

function TodoItem({ todoData }: { todoData: Todos[] }) {
  const queryClient = useQueryClient();

  /** Todo isDone 상태 토글 Mutation*/
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

  /** Todo 완료하기 클릭 핸들러 */
  const handleToggleIsDone = (id: string, isDone: boolean) => {
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
        <li className="flex mb-2">
          <div className="w-[200px] text-center">제목</div>
          <div className="w-[400px] text-center">내용</div>
          <div className="w-[150px] text-center">관리</div>
        </li>
        <hr />
        {todoData.map((item) => (
          <li key={item.id} className="flex hover:bg-rose-50 p-2">
            <div className={`w-[200px] ${item.isDone ? 'apply: text-gray-400' : 'apply: text-black'}`}>
              {item.title}
            </div>
            <div className={`w-[400px] ${item.isDone ? 'apply: text-gray-400' : 'apply: text-black'}`}>
              {item.content}
            </div>
            <div className="flex gap-2 justify-center w-[150px]">
              <Link href={`/todos-csr/${item.id}`} style={buttonStyle}>
                보기
              </Link>
              <div
                className="flex justify-center items-center cursor-pointer"
                onClick={() => handleToggleIsDone(item.id, item.isDone)}
              >
                {item.isDone ? (
                  <Image src={Checked} alt="체크된 박스" style={{ width: '18px' }} />
                ) : (
                  <Image src={Unchecked} alt="체크 안된 박스" style={{ width: '15px' }} />
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default TodoItem;
