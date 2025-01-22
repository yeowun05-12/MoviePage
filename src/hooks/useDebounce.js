// 검색어를 디바운싱하는 역할을 하는 훅
// 화면과 관계가 없는 로직이라서 js로 파일을 만들었음
// HOOK은 REACT의 상태와 라이프사이클을 활용한 재사용 가능한 코드 조각일 뿐, 화면을 렌더링 하는 컨포넌트가 아니다.

import { useEffect, useState } from 'react';

export function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      //외부에서 받아온 값을 최신 상태를 함수에 담아서 받아옴
      setDebounceValue(value);
      // 두번째 인자로 delay도 받아옴
    }, delay);

    // 컴포넌트 언마운트(컨포넌트가 화면에서 제거) 또는 갑싱 변경될 때 이전 타이머를 정리
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
}
