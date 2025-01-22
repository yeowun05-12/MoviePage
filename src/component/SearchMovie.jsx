import { Link } from 'react-router-dom';

const SearchMovie = ({ movies, isLoading }) => {
  if (isLoading) return <p>로딩 중...</p>;
  
  if (movies.length === 0) return <p>검색 결과가 없습니다.</p>;
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id} className='movieCard'>
          <Link to={`/detail/${movie.id}`}>
            {/* 각 영화의 id에 맞게 경로를 설정 */}
            <img
              src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt={movie.title}
            />
            <div className='movieInfo'>
              <h3>{movie.title}</h3>
              <p> 평점 : {parseInt(movie.vote_average)} </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SearchMovie;
