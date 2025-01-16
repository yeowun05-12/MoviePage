import React from 'react';
import data from '../assets/data/movieDetailData.json';
import { useParams } from 'react-router-dom';
import Layout from './Layout';

const MovieDetail = () => {
  const { id } = useParams();

  const Data = Object.entries(data).map(([key, value]) => {
    return [key, value];
  });

  const Detaildata = Object.fromEntries(Data);

  return (
    <>
      <div className='detailContainer'>
        <img
          src={`https://image.tmdb.org/t/p/w500/${Detaildata.backdrop_path}`}
        ></img>
        <img
          src={`https://image.tmdb.org/t/p/w500/${Detaildata.poster_path}`}
        ></img>
        <h3>{Detaildata.title}</h3>
        <p>{parseInt(Detaildata.vote_average)}</p>
        <ul>
          {Detaildata.genres.map((el) => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
        <p>{Detaildata.overview}</p>
      </div>
    </>
  );
};

export default MovieDetail;
