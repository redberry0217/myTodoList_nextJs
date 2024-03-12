import { Todos } from '@/app/types';

export async function GET(request: Request): Promise<Response> {
  try {
    const response = await fetch(`http://localhost:4000/todos`);
    const todosList: Todos[] = await response.json();

    if (!todosList) {
      return new Response('Todos 정보를 찾을 수 없습니다.', { status: 404 });
    } else if (todosList.length === 0) {
      return new Response('Todos 정보가 없습니다.', { status: 204 });
    }

    return new Response(JSON.stringify({ todosList }), { status: 200 });
  } catch (error) {
    console.error(`에러 발생`, error);
    return new Response(`서버 에러`, { status: 500 });
  }
}
