import React from 'react';
import { Todos } from '../types';

async function ReportPage() {
  const response = await fetch(`http://localhost:3000/api/todos`, { next: { revalidate: 10 } });
  const { todosList }: { todosList: Todos[] } = await response.json();
  const todoList = todosList.filter((item) => item.isDone === false);
  const doneList = todosList.filter((item) => item.isDone === true);

  return (
    <main className="h-screen flex justify-center bg-rose-50">
      <article className="flex flex-rows justify-center items-center w-[900px] h-[300px] m-20 p-10 bg-white rounded-xl">
        <div className="flex flex-col">
          <h1 className="text-2xl mb-3.5 text-center">😺투두리스트 통계😺</h1>
          <p className="mt-3.5 leading-loose">
            현재 <span className="font-semibold text-rose-500">{todosList.length}개</span>의 투두리스트가 등록되어
            있습니다.
            <br />
            해야할 todo는 <span className="font-semibold text-rose-500">{todoList.length}개</span>, 완료된 todo는{' '}
            <span className="font-semibold text-rose-500">{doneList.length}개</span>가 있습니다.
          </p>
        </div>
      </article>
    </main>
  );
}

export default ReportPage;
