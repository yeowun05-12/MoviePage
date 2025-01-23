import { useParams } from 'react-router-dom';
import { useMovie } from '../hooks/useMovie';
import './scss/moviedetail.scss';

const MovieDetail = ({ movies }) => {
  const { id } = useParams(); // 이 친구가 반환하는 값은 문자열이므로 parseInt로 숫자로 변환해줘야함
  const { movie, loading, error } = useMovie();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error}</p>;

  const allMovies = [...movie, ...movies];
  const movieDetail = allMovies.find((el) => el.id === parseInt(id)); // 데이터에서 직접 가지고 온 값은 숫자이기 때문에 parseInt로 문자열에서 숫자열로 변환해준 것임 *반드시 기억할 것*

  if (!movieDetail) {
    return <p> 영화를 찾을 수 없습니다.</p>;
  }

  return (
    <>
      <div className='detailContainer'>
        {/* <div
          // 배경이미지
          className='bgImg'
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path})`, // 이미지 넣을 때는 url()로 감싸줘야함.
          }}
        ></div> */}
        <img
          className='bgImg'
          src={`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`}
          alt=''
        />
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
