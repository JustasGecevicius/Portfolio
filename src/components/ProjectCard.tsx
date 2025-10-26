import { useRef, useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";
import { ProjectTextType } from "../hooks/hooks";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ProjectCardType {
  title: string;
  images: string[];
  text: ProjectTextType;
  inView?: boolean;
}

export default function ProjectCard({ title, images, text, inView }: ProjectCardType) {
  const ref = useRef(null);
  const modalRef = useRef(null);
  useGSAP(
    () => {
      inView &&
        gsap.fromTo(ref.current, { opacity: 0, x: -400 }, { opacity: 1, x: 0, duration: 0.5 });
    },
    { scope: ref, dependencies: [inView] }
  );

  const [active, setActive] = useState(false);

  const openProjectDiv = () => {
    setActive((prev) => !prev);
  };

  useEffect(() => {
    if (active) {
      disableBodyScroll(modalRef);
    } else {
      enableBodyScroll(modalRef);
    }
  }, [active]);

  return active ? (
    <ProjectModal title={title} setActive={setActive} images={images} text={text} ref={modalRef} />
  ) : (
    inView && (
      <div
        ref={ref}
        onClick={openProjectDiv}
        className="w-5/12 md:w-2/12 hover:cursor-pointer hover:scale-110 transition-transform duration-300"
      >
        <div className="w-full">
          <img
            src={images[0]}
            className="w-full rounded-md shadow-outline aspect-square md:rounded-lg ring-[#00aeff] ring-2"
            alt="projectImage"
          />
        </div>
        <h3 className="pt-2 text-lg text-center md:text-xl">{text["name"]}</h3>
      </div>
    )
  );
}
