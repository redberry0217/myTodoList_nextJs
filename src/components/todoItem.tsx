import React from 'react';
import { buttonStyle } from '@/styles/styles';

function TodoItem() {
  return (
    <section className="flex flex-col items-center pt-3">
      <ul>
        <li className="flex mb-2 hover:bg-gray-100">
          <div className="w-[200px]">빨래하기</div>
          <div className="w-[400px]">세탁기가 대신 하는 거겠지만</div>
          <div className="flex gap-2">
            <button style={buttonStyle}>보기</button>
            <button style={buttonStyle}>완료</button>
          </div>
        </li>
        <li className="flex mb-2 hover:bg-gray-100">
          <div className="w-[200px]">커피마시기</div>
          <div className="w-[400px]">끝내주는 커피 마시고 싶다</div>
          <div className="flex gap-2">
            <button style={buttonStyle}>보기</button>
            <button style={buttonStyle}>완료</button>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default TodoItem;
