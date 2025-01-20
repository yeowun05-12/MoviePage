import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';
import { useMovie } from './MovieProvider';

const MovieDetail = () => {
  const { movie, loading, error } = useMovie();

  const { id } = useParams();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;

  const movieDetail = movie.find((el) => el.id === parseInt(id)); // useParams로 가지고 온 값은 parseInt메서드로 값을 가지고 올 수 있음. *반드시 기억할 것*

  if (!movieDetail) {
    return <p> 영화를 찾을 수 없습니다.</p>;
  }

  console.log(movieDetail);
  return (
    <>
      <div className='detailContainer'>
        <div
          // 배경이미지
          className='bgImg'
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path})`, // 이미지 넣을 때는 url()로 감싸줘야함.
          }}
        ></div>
        {/* 상세정보 */}
        <div className='detailContent'>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`}
            alt={movieDetail.title}
          ></img>
          <h3>{movieDetail.title}</h3>
          {/* 평점 */}
          <p>{parseInt(movieDetail.vote_average)}</p>
          {/* 장르 */}
          {/* 줄거리 */}
          <p>{movieDetail.overview}</p>
        </div>
      </div>
    </>
  );
};

export default MovieDetail;
