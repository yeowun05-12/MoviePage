import { useContext } from 'react';
import { MovieContext } from '../component/MovieProvider';

export function useMovie() {
  return useContext(MovieContext);
}
