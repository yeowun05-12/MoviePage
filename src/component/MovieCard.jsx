import React from 'react';
import data from '../assets/data/movieListData.json';
import { Link } from 'react-router-dom';
import { useMovie } from './MovieProvider';

const MovieCard = () => {
  const { movie, loading, error } = useMovie();

  // const movieData = data.results;
  console.log(movie);

  return (
    <div>
      <ul className='cardContainer'>
        {movie
          .filter((el) => el.adult === false)
          .map((el) => (
            <li key={el.id} className='movieCard'>
              <Link to={`/detail/${el.id}`}>
                {/* 각 영화의 id에 맞게 경로를 설정 */}
                <img
                  src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`}
                  alt={el.title}
                />
                <div className='movieInfo'>
                  <h3>{el.title}</h3>
                  <p> 평점 : {parseInt(el.vote_average)} </p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MovieCard;
