import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

function Ehospital() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets1.lottiefiles.com/packages/lf20_mR5H7A.json'
    });
  }, []);

  return (
    <div ref={container} style={{ width: '300px', height: '300px' }}></div>
  );
}




export default Ehospital;
