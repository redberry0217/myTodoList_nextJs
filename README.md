# ❤️MY TODO LIST _ Next.Js❤️
![image](https://github.com/redberry0217/myTodoList_nextJs/assets/153061626/b22b3a40-92b2-4672-9ae4-ee0d49eac8b3)

Next.js로 다시 만들어 본 투두리스트 및 렌더링 테스트 애플리케이션입니다.

## 💘개발 기간

2024.03.12(화)~15(금)

## 💘시작 가이드

```bash
npx json-server db.json --port 4000
npm run dev
```

## 💘페이지와 기능

### HOME
  * 공통 레이아웃으로 nav 상단바가 있습니다.
### ABOUT
  * SSR 방식으로 렌더링하는 회사 소개 페이지입니다.
### REPORT
  * ISR 방식으로 렌더링하는 투두리스트 통계 페이지입니다.
  * 10초마다 데이터가 업데이트됩니다.
### TODOS-CSR
  * CSR 방식으로 렌더링하는 투두리스트 페이지입니다.
  * 새로운 Todo 작성
  * 작성된 Todo 완료 상태 변경
  * '보기' 버튼 클릭 시 해당 Todo의 상세페이지로 이동
  * 'Todo 통계보기' 버튼 클릭 시 `useRouter`에 의해 REPORT 페이지로 이동
### TODOS-CSR 상세페이지
  * 클릭한 Todo의 상세페이지
  * '수정' 버튼 클릭 시 해당 Todo의 제목, 내용 수정
  * '삭제' 버튼 클릭 시 해당 Todo 삭제 후 목록으로 돌아감
### TODOS-SSR
  * SSR 방식으로 렌더링하는 투두리스트 페이지이며, 리스트만 볼 수 있습니다.
  * 'Todo 통계보기' 버튼 클릭 시 `Link`에 의해 REPORT 페이지로 이동
    
## 💘사용된 기술
  * Next.js
  * Tanstack React-Query
  * TypeScript
  * Tailwind

## 💘어려웠던 점
  * `Next.js` 환경이 익숙지 않았고, 백엔드 입장에서의 데이터 통신 로직을 작성할 때 어려웠습니다.
  * `Tailwind`가 생각보다 내 마음대로 스타일을 컨트롤 하기 어렵다는 생각이 들었습니다. 또한 난무하는 className 때문에 코드의 가독성이 떨어질 수 있겠다고 느꼈습니다.
