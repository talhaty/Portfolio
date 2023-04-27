import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

function LottiePlayer() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets6.lottiefiles.com/packages/lf20_sy6jjyct.json'
    });
  }, []);

  return (
    <div ref={container} style={{ width: '300px', height: '300px' }}></div>
  );
}


export default LottiePlayer;
