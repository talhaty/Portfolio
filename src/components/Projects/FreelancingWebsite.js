import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

function FreelancingWebsite() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets4.lottiefiles.com/packages/lf20_Vx3h9L.json'
    });
  }, []);

  return (
    <div ref={container} style={{ width: '300px', height: '300px' }}></div>
  );
}


export default FreelancingWebsite;