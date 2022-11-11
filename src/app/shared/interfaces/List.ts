import { Results } from './Results';

export interface List {
  average_rating: number;
  backdrop_path: string;
  comments: any[];
  description: string;
  id: number;
  iso_3166_1: string;
  iso_639_1: string;
  object_ids: any[];
  results: Results[];
  poster_path: string;
}

export interface listSeries {
  average_rating: number;
  backdrop_path: string;
  comments: any[];
  description: string;
  id: number;
  iso_3166_1: string;
  iso_639_1: string;
  object_ids: any[];
  results: Results[];
  poster_path: string;
}
