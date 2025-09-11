import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";

const ThreeD = lazy(() => import("./3D"));

export default function TechStack() {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  return (
    <div ref={ref} className="flex flex-col items-center justify-start w-screen p-5 h-fit">
      <h2 className="text-3xl font-bold max-w-prose">Tech</h2>
      {inView ? (
        <Suspense fallback={null}>
          <ThreeD />
        </Suspense>
      ) : null}
    </div>
  );
}
