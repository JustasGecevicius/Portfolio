import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { useProjectList } from "../hooks/hooks";
import { getFirebaseConfig } from "../config/firebaseConfig";
import { ClipLoader } from "react-spinners";
import { lazy, Suspense } from "react";
import { useInView } from "react-intersection-observer";

const config = getFirebaseConfig();
const app = initializeApp(config);
const db = getFirestore(app);

const MainProject = lazy(() => import("../components/MainProject"));
const SmallProject = lazy(() => import("../components/SmallProject"));

export default function Projects() {
  const projectsList = useProjectList(db);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "50px",
  });

  return (
    <div
      ref={ref}
      className="flex flex-col min-h-full p-4 overflow-x-hidden grow md:p-10"
      id="projects"
    >
      <h2 className="text-lg text-center md:text-xl text-white_blue">Projects</h2>
      {inView ? (
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-full grow">
              <ClipLoader color="#00aeff" />
            </div>
          }
        >
          <div className="pt-2">
            {projectsList?.MainProjects && (
              <div className="pt-2 md:pt-8">
                <h3 className="text-3xl font-semibold text-center md:text-5xl">Main Projects</h3>
                <div className="[&>*:nth-child(odd)]:md:flex-row-reverse">
                  {projectsList.MainProjects.map((project, index) => (
                    <MainProject project={project} db={db} key={index} />
                  ))}
                </div>
              </div>
            )}
            {projectsList?.SmallProjects && (
              <div className="pt-4">
                <h3 className="text-3xl font-semibold text-center md:pt-10 md:text-5xl">
                  Smaller Projects
                </h3>
                <div className="flex flex-row flex-wrap justify-center gap-3 pt-2 md:pt-10 md:gap-6">
                  {projectsList.SmallProjects.map((project, index) => (
                    <SmallProject project={project} db={db} key={index} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </Suspense>
      ) : null}
    </div>
  );
}
