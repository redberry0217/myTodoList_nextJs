export async function DELETE(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();

    await fetch(`http://localhost:4000/todos/${id}`, {
      method: 'DELETE'
    });

    return new Response('Todo 삭제 완료', { status: 204 });
  } catch (error) {
    return new Response('서버 에러', { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();
    const { title, content } = await request.json();

    await fetch(`http://localhost:4000/todos/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ title, content })
    });
    return new Response('Todo 수정 완료', { status: 200 });
  } catch (error) {
    return new Response(`서버 에러`, { status: 500 });
  }
}
