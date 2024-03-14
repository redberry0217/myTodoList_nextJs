'use client';

import { TodoList } from '@/app/types';
import { buttonStyle } from '@/styles/styles';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React from 'react';

function DetailPage() {
  const { id }: { id: string } = useParams();
  const queryClient = useQueryClient();
  const router = useRouter();

  /** Todo 삭제하기 Mutation */
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      try {
        await fetch(`http://localhost:3000/api/todos/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } catch (error) {
        alert(`Todo 삭제 에러 발생, 다시 시도하세요.`);
        console.log('error', error);
      }
    }
  });

  /** Todo 데이터 받아와서 선택한 Todo만 골라냄 */
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

  const myTodo = data.find((item) => item.id === id);
  if (!myTodo) return;

  /** Todo 삭제하기 버튼 클릭 핸들러 */
  const handleDelete = (id: string) => {
    if (!window.confirm(`해당 Todo를 삭제하시겠습니까?`)) return;
    deleteMutation.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['todos'] });
        router.push('/todos-csr', undefined, { shallow: true });
      }
    });
  };

  return (
    <section className="flex flex-col items-center pt-10 bg-rose-50 h-screen">
      <div className="w-[800px] bg-white rounded-xl p-5 flex flex-col">
        <h1 className="text-lg text-rose-500 mb-3">💘Todo 상세보기</h1>
        <hr />
        <div className="flex flex-col pl-5 mt-5">
          <h3 className="leading-loose">
            🔹제목 : {myTodo.title}
            <br />
            🔹내용 : {myTodo.content}
            <br />
            🔹상태 : {myTodo.isDone ? '완료됨' : '완료되지 않음'}
          </h3>
        </div>
        <div className="flex gap-4 mt-10 justify-center">
          <button style={buttonStyle}>수정</button>
          <button style={buttonStyle} onClick={() => handleDelete(id)}>
            삭제
          </button>
        </div>
      </div>
      <div className="mt-5 flex w-[800px] justify-end">
        <Link href="/todos-csr" style={buttonStyle}>
          뒤로가기
        </Link>
      </div>
    </section>
  );
}

export default DetailPage;
