import { uniqueId } from 'lodash';
import { useEffect } from 'react';

export const FloatyBoys = () => {
  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>('.interactive');

    window.addEventListener('mousemove', (event) => {
      if (!interBubble) return;
      requestAnimationFrame(() => {
        interBubble.style.transform = `translate(${Math.round(event.clientX) - 150}px, ${
          Math.round(event.clientY) - 300
        }px)`;
      });
    });
  }, []);

  return (
    <div className='fixed w-screen h-screen overflow-hidden gradient-bg bg-black_blue -z-10'>
      <svg xmlns='http://www.w3.org/2000/svg'>
        <defs>
          <filter id='goo'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='10' result='blur' />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
              result='goo'
            />
            <feBlend in='SourceGraphic' in2='goo' />
          </filter>
        </defs>
      </svg>
      <div className='w-screen h-screen gradient-container'>
        {new Array(5).fill(0).map((_, index) => (
          <FloatyBoy index={index + 1} key={uniqueId()} />
        ))}
        <div className='interactive w-[300px] h-[300px] mix-blend-hard-light' />
      </div>
    </div>
  );
};

const FloatyBoy = (params: { index: number }) => {
  return (
    <div
      className={`g${params.index} absolute mix-blend-hard-light  w-4/5 h-4/5 opacity-100`}
    />
  );
};
