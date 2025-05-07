import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { origin } from '../lib/const';

interface User {
  id: string;
  username: string;
  email: string;
}

export const useUserData = () =>
  useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axios.get(`${origin}/api/users`);
      return data;
    },
  });
