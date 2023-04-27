import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

function Chattyfai() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets5.lottiefiles.com/packages/lf20_4soa34Y516.json'
    });
  }, []);

  return (
    <div ref={container} style={{ width: '300px', height: '300px' }}></div>
  );
}




export default Chattyfai;
