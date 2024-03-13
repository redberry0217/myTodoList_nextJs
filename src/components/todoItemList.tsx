import React from 'react';
import TodoItem from './todoItem';

function TodoItemList() {
  return (
    <section className="flex flex-col items-center pt-10 gap-y-10">
      <div className="w-[800px] border rounded-xl p-5">
        <h1 className="text-lg text-rose-500">✏️ TodoList</h1>
        <hr />
        <TodoItem />
      </div>
      <div className="w-[800px] border rounded-xl p-5">
        <h1 className="text-lg text-rose-500">✅ DoneList</h1>
        <hr />
        <TodoItem />
      </div>
    </section>
  );
}

export default TodoItemList;
