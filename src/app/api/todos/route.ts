import { TodosList } from '@/app/types';

export async function GET(request: Request) {
  const response = await fetch(`http://localhost:4000/todos`);
  const todosList: TodosList[] = await response.json();

  if (!todosList) {
    return new Response('Todos 정보를 찾을 수 없습니다.', { status: 404 });
  } else if (todosList.length === 0) {
    return [];
  }

  return Response.json({ todosList: todosList });
}
