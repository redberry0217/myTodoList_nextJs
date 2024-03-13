export async function DELETE(request: Request): Promise<Response> {
  try {
    const { id } = await request.json();
    await fetch(`http://localhost:4000/todos/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({ id })
    });

    return new Response('Todo 삭제 완료', { status: 204 });
  } catch (error) {
    console.error(`에러 발생`, error);
    return new Response(`서버 에러`, { status: 500 });
  }
}
