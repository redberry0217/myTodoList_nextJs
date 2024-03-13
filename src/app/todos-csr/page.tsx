'use client';

import TodoForm from '@/components/todoForm';
import TodoItemList from '@/components/todoItemList';
import React from 'react';

function TodosCsrPage() {
  return (
    <>
      <TodoForm />
      <TodoItemList />
    </>
  );
}

export default TodosCsrPage;
