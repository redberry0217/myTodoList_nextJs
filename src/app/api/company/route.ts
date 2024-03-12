import { CompanyInfo } from '@/app/types';

export async function GET(request: Request) {
  const response = await fetch(`http://localhost:4000/companyInfo`);
  const companyInfo: CompanyInfo = await response.json();

  if (!companyInfo) {
    return new Response('회사 정보가 없습니다.', { status: 404 });
  }

  return Response.json({ companyInfo: companyInfo });
}
