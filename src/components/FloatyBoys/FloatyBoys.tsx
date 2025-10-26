import { memo, useEffect, useMemo } from "react";
import { SingleFloatyBoy } from "./SingleFloatyBoy";

function FloatyBoys() {
  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>(".interactive");

    window.addEventListener("mousemove", (event) => {
      if (!interBubble) return;
      requestAnimationFrame(() => {
        interBubble.style.transform = `translate(${Math.round(event.clientX) - 150}px, ${
          Math.round(event.clientY) - 300
        }px)`;
      });
    });
  }, []);

  const FloatyBoyArray = useMemo(
    () => [0, 0, 0, 0, 0].map((_, index) => ({ index: index + 1, key: Math.random() })),
    []
  );

  return (
    <div className="fixed w-screen h-screen overflow-hidden gradient-bg bg-black_blue -z-10">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="w-screen h-screen gradient-container">
        {FloatyBoyArray.map((boy) => (
          <SingleFloatyBoy {...boy} />
        ))}
        <div className="interactive w-[300px] h-[300px] mix-blend-hard-light" />
      </div>
    </div>
  );
}

export const MemoizedFloatyBoys = memo(FloatyBoys);
