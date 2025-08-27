import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([
      { id: '1', username: 'john', email: 'john@gmail.com' },
      { id: '2', username: 'kim', email: 'kim@gmail.com' },
      { id: '3', username: 'lee', email: 'lee@gmail.com' },
    ]);
  }),
];
