import React from 'react';
import { Todos } from '../types';

function TodoItemSsr({ data }: { data: Todos[] }) {
  return (
    <>
      <div>
        <div className="flex mb-2">
          <div className="w-[300px] text-center">제목</div>
          <div className="w-[500px] text-center">내용</div>
        </div>
        <hr />
        {data.length === 0 ? <div className="text-center mt-5">Todo가 없습니다.</div> : null}
        {data.map((item) => (
          <div key={item.id} className="flex justify-center hover:bg-rose-50 p-2">
            <div className="w-[300px]">{item.title}</div>
            <div className="w-[500px]">{item.content}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoItemSsr;
