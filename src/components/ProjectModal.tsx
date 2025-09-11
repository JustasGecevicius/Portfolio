import { ProjectTextType } from "../hooks/hooks";
import githubSVG from "../assets/github-mark-white.svg";

interface ProjectModaltype {
  title: string;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  images: string[];
  text: ProjectTextType;
  ref: React.MutableRefObject<null>;
}

export default function ProjectModal({ setActive, images, text }: ProjectModaltype) {
  return (
    <div className="fixed top-0 bottom-0 z-30 flex justify-center w-screen px-5 pt-8">
      <div className="fixed top-0 bottom-0 w-screen -z-10 bg-neutral-800"></div>
      <p
        className="fixed hover:ring-2 hover:ring-[#00aeff] top-0 right-0 flex items-center justify-center w-6 m-2 antialiased text-center text-[#00aeff] bg-white rounded-full md:text-2xl aspect-square md:w-10"
        onClick={() => {
          setActive(false);
        }}
      >
        &#10005;
      </p>
      <div className="flex flex-col items-center w-screen gap-10 md:scale-150 md:flex-row md:max-w-2xl">
        <div className="flex flex-col items-center w-full gap-5 p-1 overflow-y-auto basis-0 aspect-square grow rounded-xl h-fit">
          {Object.values(images).map((elem, index) => {
            return (
              <img
                key={index}
                className="h-full aspect-square rounded-xl ring-[#00aeff] ring-2"
                src={elem}
                alt="ProjectImage"
              />
            );
          })}
        </div>
        <div className="overflow-y-auto basis-0 grow">
          <h3 className="p-2 text-xl font-bold text-center">{text["name"]}</h3>
          <p className="">{text["p"]}</p>
          <h4 className="p-2 text-center">Technologies Used</h4>
          <ul className="p-2 text-center">
            {text["tech"].map((elem, index) => {
              return (
                <li key={index} className="italic">
                  {elem}
                </li>
              );
            })}
          </ul>
          <div className="flex flex-row justify-center pt-2 mb-2 overflow-hidden h-14 gap-x-2">
            <a href={text["link"]} target="_b" className="h-full">
              <button className="h-full">Visit Website</button>
            </a>
            <a href={text["linkGithub"]} target="_b" className="h-full">
              <button className="h-full p-0 px-2">
                <img src={githubSVG} alt="githuib-image" className="h-2/3 aspect-square" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
