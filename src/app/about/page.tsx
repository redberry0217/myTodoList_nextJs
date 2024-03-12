import React from 'react';
import { CompanyInfo } from '../types';

async function AboutPage() {
  const response = await fetch(`http://localhost:3000/api/company`);
  const { companyInfo }: { companyInfo: CompanyInfo } = await response.json();

  return (
    <main className="h-screen flex justify-center bg-rose-50">
      <article className="flex flex-rows items-center w-[900px] h-[300px] m-20 p-10 border-solid bg-white rounded-xl">
        <div>
          <img src={companyInfo.image} alt="회사 이미지" style={{ borderRadius: '12px', width: '350px' }} />
        </div>
        <div className="flex flex-col pl-10">
          <h1 className="text-lg font-semibold mb-3.5">😺회사소개😺</h1>
          <p>{companyInfo.name}</p>
          <p>{companyInfo.description}</p>
          <p>대표이사 {companyInfo.ceo}</p>
          <p className="mt-3.5">{companyInfo.address}</p>
        </div>
      </article>
    </main>
  );
}

export default AboutPage;
