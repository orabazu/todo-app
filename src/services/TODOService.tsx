import { api } from 'lib/Api';

export type TODOResponse = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

class TODOService {
  getTODOS(params?: string): Promise<TODOResponse> {
    return api.get<TODOResponse>('posts', params);
  }
}

export const todoService = new TODOService();
