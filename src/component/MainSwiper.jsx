// Swiper React 컴포넌트와 모듈 불러오기
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import data from '../assets/data/movieListData.json';

// Swiper 스타일 불러오기
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MainSwiper = () => {
  const movieData = data.results;

  return (
    <Swiper
      className='swiperWrapper'
      modules={[Navigation, Pagination]} // 모듈 추가
      navigation // 네비게이션 활성화
      pagination={{ clickable: true }} // 페이지네이션 활성화
      loop={true}
      spaceBetween={50} // 슬라이드 간격
      slidesPerView={1} // 한 번에 보이는 슬라이드 수
      autoplay={{ delay: 1000, disableOnInteraction: false }} // 사용자가 슬라이드 했어도 자동으로 슬라이드 유지
    >
      {movieData
        .filter((el) => el.popularity > 900)
        .map((el) => (
          <SwiperSlide key={el.id} className='swiperSlide'>
            <div className='bg_black'>
              <img
                src={`https://image.tmdb.org/t/p/w500/${el.backdrop_path}`}
                alt=''
                style={{ width: '100%' }}
              />
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MainSwiper;
