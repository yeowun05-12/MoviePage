import React from 'react';
import data from '../assets/data/movieListData.json';
import { Link } from 'react-router-dom';
const MovieCard = () => {
  const movieData = data.results;

  return (
    <div>
      <ul className='cardContainer'>
        {movieData.map((el) => (
          <li key={el.id} className='movieCard'>
            <Link to={`/detail`}>
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
