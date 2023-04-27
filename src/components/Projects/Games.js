import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

function Games() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets6.lottiefiles.com/packages/lf20_z8ajq0oq.json'
    });
  }, []);

  return (
    <div ref={container} style={{ width: '300px', height: '300px' }}></div>
  );
}




export default Games;
