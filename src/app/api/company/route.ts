import { CompanyInfo } from '@/app/types';

export async function GET(request: Request): Promise<Response> {
  try {
    const response = await fetch(`http://localhost:4000/companyInfo`);
    const data: CompanyInfo = await response.json();

    if (!data || Object.keys(data).length === 0) {
      return new Response('회사 정보가 없습니다.', { status: 404 });
    }
    return new Response(JSON.stringify({ data }), { status: 200 });
  } catch (error) {
    console.error('에러 발생', error);
    return new Response(`서버 에러`, { status: 500 });
  }
}
