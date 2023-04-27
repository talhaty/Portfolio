import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

function VotingWeb3() {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets8.lottiefiles.com/packages/lf20_ne5ow2fq.json'
    });
  }, []);

  return (
    <div ref={container} style={{ width: '300px', height: '300px' }}></div>
  );
}



export default VotingWeb3;
