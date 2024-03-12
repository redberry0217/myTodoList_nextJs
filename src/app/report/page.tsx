import React from 'react';
import { Todos } from '../types';

async function ReportPage() {
  const response = await fetch(`http://localhost:3000/api/todos`, { next: { revalidate: 10 } });
  const { todosList }: { todosList: Todos[] } = await response.json();
  return (
    <main className="h-screen flex justify-center bg-rose-50">
      <article className="flex flex-rows items-center w-[900px] h-[300px] m-20 p-10 border-solid bg-white rounded-xl">
        <div className="flex flex-col pl-10">
          <h1 className="text-lg font-semibold mb-3.5">😺투두리스트 통계😺</h1>
          <p className="mt-3.5">{todosList.length}</p>
        </div>
      </article>
    </main>
  );
}

export default ReportPage;
