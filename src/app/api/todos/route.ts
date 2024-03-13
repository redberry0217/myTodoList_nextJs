import { Todos } from '@/app/types';

export async function GET(request: Request): Promise<Response> {
  try {
    const response = await fetch(`http://localhost:4000/todos`);
    const todosList: Todos[] = await response.json();

    if (!todosList) {
      return new Response('Todos 정보를 찾을 수 없습니다.', { status: 404 });
    } else if (todosList.length === 0) {
      return new Response(JSON.stringify({ todosList: [] }), { status: 204 });
    }
    return new Response(JSON.stringify({ todosList }), { status: 200 });
  } catch (error) {
    console.error(`에러 발생`, error);
    return new Response(`서버 에러`, { status: 500 });
  }
}

export async function POST(request: Request): Promise<Response> {
  try {
    const { title, content } = await request.json();
    if (!title || !content) {
      return new Response('제목과 내용은 필수 입력값입니다.', { status: 400 });
    }
    await fetch(`http://localhost:4000/todos`, {
      method: 'POST',
      body: JSON.stringify({ title, content, isDone: false })
    });
    return new Response('Todo 등록 완료', { status: 200 });
  } catch (error) {
    console.error(`에러 발생`, error);
    return new Response(`서버 에러`, { status: 500 });
  }
}
