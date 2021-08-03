import { api } from 'lib/Api';

export type TodoResponse = {
  id: number;
  title: string;
  body: string;
  userId: number;
} & { isDone?: boolean };

class TodoService {
  getTODOS(params?: string): Promise<TodoResponse[]> {
    return api.get<TodoResponse[]>('posts', params);
  }
}

export const todoService = new TodoService();
