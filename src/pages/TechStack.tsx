import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";
import { ClipLoader } from "react-spinners";

const ThreeD = lazy(() => import("./3D/3D"));

export default function TechStack() {
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
    rootMargin: "300px",
  });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center justify-start w-screen min-h-screen p-5 h-fit"
    >
      <h2 className="text-3xl font-bold max-w-prose">Tech</h2>
      {inView ? (
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-full grow">
              <ClipLoader color="#00aeff" />
            </div>
          }
        >
          <ThreeD />
        </Suspense>
      ) : null}
    </div>
  );
}
