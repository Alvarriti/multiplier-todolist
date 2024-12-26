export interface Todo {
  id: string;
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoState {
  todoMap: Map<string, Todo>;
  todoIds: string[];
  loading: boolean;
  error: string | null;
}