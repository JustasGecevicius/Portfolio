import { useProjectImages, useProjectText } from "../hooks/hooks";
import { Firestore } from "firebase/firestore/lite";
import githubSVG from "../assets/github-mark-white.svg";

export interface MainProjectType {
  project: string;
  db: Firestore;
}

export default function MainProject({ project, db }: MainProjectType) {
  const projectImages = useProjectImages(project, db);
  const projectText = useProjectText(project, db);

  return (
    projectImages &&
    projectText && (
      <div className="flex flex-col items-center pt-4 h-fit md:flex-row md:gap-x-8 md:pt-10">
        <img
          src={projectImages[0]}
          alt="Project Image"
          className="rounded-lg md:grow md:basis-0 md:h-full md:w-48"
        />
        <div className="pt-2 h-fit md:grow md:basis-0 md:pt-0">
          <h3 className="pt-4 text-2xl text-center md:text-3xl">{projectText["name"]}</h3>
          <div className="pt-2 h-fit md:pt-4">
            <p className="text-justify md:text-xl">{projectText["p"]}</p>
            <h4 className="pt-2 text-lg font-semibold text-center md:text-xl md:pt-4">
              Technologies Used
            </h4>
            <ul className="pt-2 text-center md:pt-4">
              {projectText["tech"].map((elem, index) => {
                return (
                  <li key={index} className="italic md:text-lg">
                    {elem}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="flex flex-row justify-center pt-2 gap-x-2 md:pt-4">
            <a
              href={projectText["link"]}
              target="_b"
              className="h-12 text-lg md:text-xl text-blue hover:text-light_blue flex-center"
            >
              Visit Website
            </a>
            <a
              href={projectText["linkGithub"]}
              target="_b"
              className="h-12 p-0 px-2 hover:scale-125 flex-center"
            >
              <img src={githubSVG} alt="github-image" className="h-2/3 aspect-square" />
            </a>
          </div>
          <p className="w-full mt-4 mb-2 border-b-2 border-white border-solid rounded-full md:hidden"></p>
        </div>
      </div>
    )
  );
}
