import { useEffect, useState } from 'react';

function useResize() {
  const [windowHeight, setWindowHeight] = useState(0);

  const onResize = () => {
    // TODO: 기획에 따라 height 정책 변경
    const documentClientHeight = document.documentElement.clientHeight;
    setWindowHeight(documentClientHeight > 768 ? documentClientHeight : window.innerHeight);
  };

  useEffect(() => {
    // TODO: throttle
    window.addEventListener('resize', onResize);
    onResize();

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return windowHeight;
}
export default useResize;