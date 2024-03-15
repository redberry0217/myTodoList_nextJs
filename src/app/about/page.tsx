import React from 'react';
import { CompanyInfo } from '../types';

async function AboutPage() {
  const response = await fetch(`http://localhost:4000/companyInfo`);
  const companyInfo: CompanyInfo = await response.json();

  return (
    <main className="h-screen flex justify-center bg-rose-50">
      <article className="flex flex-col justify-center items-center w-[900px] h-[550px] m-20 p-10 bg-white rounded-xl">
        <h1 className="text-2xl mb-6">😺회사소개😺</h1>
        <div>
          <img src={companyInfo.image} alt="회사 이미지" style={{ borderRadius: '12px', width: '350px' }} />
        </div>
        <div className="flex flex-col text-center">
          <p className="font-semibold text-2xl text-rose-500 leading-loose mt-5">{companyInfo.name}</p>
          <p className="leading-loose">
            {companyInfo.description}
            <br />
            대표이사 {companyInfo.ceo}
          </p>
          <p className="mt-5 text-gray-400">{companyInfo.address}</p>
        </div>
      </article>
    </main>
  );
}

export default AboutPage;
