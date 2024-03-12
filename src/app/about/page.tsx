import React from "react";
import { CompanyInfo } from "../types";

async function AboutPage() {
  const response = await fetch(`http://localhost:3000/api/company`);
  const { companyInfo }: { companyInfo: CompanyInfo } = await response.json();

  return (
    <article className="flex flex-rows items-center m-20 p-20 justify-center border-solid border-2">
      <div>
        <img
          src={companyInfo.image}
          alt="회사 이미지"
          style={{ borderRadius: "12px", width: "350px" }}
        />
      </div>
      <div className="flex flex-col pl-5">
        <h1>😺회사소개😺</h1>
        <p>{companyInfo.name}</p>
        <p>{companyInfo.ceo}</p>
        <p>{companyInfo.description}</p>
        <p>{companyInfo.address}</p>
      </div>
    </article>
  );
}

export default AboutPage;
