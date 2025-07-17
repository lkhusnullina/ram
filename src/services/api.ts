import type { AxiosInstance } from 'axios';
import axios from 'axios';
import type { ICharacter } from '../shared/models/ICharacter';

const API_URL = 'https://rickandmortyapi.com/api';

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface GetCharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ICharacter[];
}
export const getCharacters = async (): Promise<ICharacter[]> => {
  try {
    const response = await api.get<GetCharactersResponse>(`/character`);
    console.log(response);
    return response.data.results;
  } catch (error) {
    console.error('Ошибка получения персонажей:', error);
    throw new Error('Не удалось получить список персонажей');
  }
};
