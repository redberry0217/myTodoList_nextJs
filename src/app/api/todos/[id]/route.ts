export async function DELETE(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);
    const id = url.pathname.split('/').pop();

    await fetch(`http://localhost:4000/todos/${id}`, {
      method: 'DELETE'
    });

    return new Response('Todo 삭제 완료', { status: 204 });
  } catch (error) {
    console.error(`에러 발생`, error);
    return new Response('서버 에러', { status: 500 });
  }
}
