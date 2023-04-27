import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

function SocialMediaApp() {
    const container = useRef(null);
  
    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'https://assets2.lottiefiles.com/packages/lf20_osdxlbqq.json'
      });
    }, []);
  
    return (
      <div ref={container} style={{ width: '300px', height: '300px' }}></div>
    );
}


export default SocialMediaApp;
