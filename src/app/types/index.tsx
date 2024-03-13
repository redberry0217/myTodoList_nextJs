export type CompanyInfo = {
  name: string;
  ceo: string;
  description: string;
  address: string;
  image: string;
};

export type Todos = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export type TodoList = Todos[];
