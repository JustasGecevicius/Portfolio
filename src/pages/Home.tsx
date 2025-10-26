import { lazy, Suspense, useState } from "react";
import { ClipLoader } from "react-spinners";
import { MemoizedFloatyBoys } from "../components/FloatyBoys/FloatyBoys";

const HomeWindow = lazy(() => import("./HomeWindow"));
const About = lazy(() => import("./About"));
const TechStack = lazy(() => import("./TechStack"));
const Projects = lazy(() => import("./Projects"));

export default function Home() {
  const [isWaitingOnAboutAnimation, setIsWaitingOnAboutAnimation] = useState(true);

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen grow">
          <ClipLoader color="#00aeff" />
        </div>
      }
    >
      <div className="relative flex flex-col w-screen grow">
        <HomeWindow />
        <About setIsWaitingOnAboutAnimation={setIsWaitingOnAboutAnimation} />
        <TechStack isWaitingOnAboutAnimation={isWaitingOnAboutAnimation} />
        <Projects />
        <MemoizedFloatyBoys />
      </div>
    </Suspense>
  );
}
