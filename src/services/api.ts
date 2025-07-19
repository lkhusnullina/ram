import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { ICharacter } from '../shared/models/ICharacter';
import type { IInfo } from '../shared/models/IInfo';
import type { ILocation } from '../shared/models/ILocation';
import type { IEpisode } from '../shared/models/IEpisode';

const API_URL = 'https://rickandmortyapi.com/api';

export const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

export interface GetCharactersResponse {
  info: IInfo;
  results: ICharacter[];
}

export interface GetEpisodesResponse {
  info: IInfo;
  results: IEpisode[];
}

export interface GetLocationsResponse {
  info: IInfo;
  results: ILocation[];
}

export const getCharacters = async (
  page = 1
): Promise<GetCharactersResponse> => {
  try {
    const response = await api.get<GetCharactersResponse>(
      `/character?page=${page}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Ошибка получения персонажей:', error);
    throw new Error('Не удалось получить список персонажей');
  }
};

export const getCharacterById = async (id: string | number): Promise<ICharacter> => {
  try {
    const response = await api.get<ICharacter>(`/character/${id}`);
    return response.data;
  } catch (error) {
    console.error('Ошибка получения персонажа:', error);
    throw new Error('Не удалось получить персонажа');
  }
};

export const getEpisodes = async (
  page = 1
): Promise<GetEpisodesResponse> => {
  try {
    const response = await api.get<GetEpisodesResponse>(
      `/episode?page=${page}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Ошибка получения эпизодов:', error);
    throw new Error('Не удалось получить список эпизодов');
  }
};

export const getEpisodeById = async (id: string | number): Promise<IEpisode> => {
  try {
    const response = await api.get<IEpisode>(`/episode/${id}`);
    return response.data;
  } catch (error) {
    console.error('Ошибка получения эпизода:', error);
    throw new Error('Не удалось получить эпизод');
  }
};

export const getLocations = async (
  page = 1
): Promise<GetLocationsResponse> => {
  try {
    const response = await api.get<GetLocationsResponse>(
      `/location?page=${page}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error('Ошибка получения локаций:', error);
    throw new Error('Не удалось получить список локаций');
  }
};

export const getLocationById = async (id: string | number): Promise<ILocation> => {
  try {
    const response = await api.get<ILocation>(`/location/${id}`);
    return response.data;
  } catch (error) {
    console.error('Ошибка получения локации:', error);
    throw new Error('Не удалось получить локацию');
  }
};

export const getCharactersByUrls = async (urls: string[]): Promise<ICharacter[]> => {
  try {
    const characterIds = urls.map(url => url.split('/').pop()); 
    const idsString = characterIds.join(',');
    const response = await api.get<ICharacter[] | ICharacter>(`/character/${idsString}`);
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      return [response.data];
    }
  } catch (error) {
    console.error('Ошибка получения персонажей:', error);
    throw new Error('Не удалось получить персонажей');
  }
};

export const getEpisodesByUrls = async (urls: string[]): Promise<IEpisode[]> => {
  try {
    const episodeIds = urls.map(url => url.split('/').pop()); 
    const idsString = episodeIds.join(',');
    const response = await api.get<IEpisode[] | IEpisode>(`/episode/${idsString}`);
    if (Array.isArray(response.data)) {
      return response.data;
    } else {
      return [response.data];
    }
  } catch (error) {
    console.error('Ошибка получения эпизодов:', error);
    throw new Error('Не удалось получить эпизодов');
  }
};
