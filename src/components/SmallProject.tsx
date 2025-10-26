import { useProjectImages, useProjectText } from "../hooks/hooks";
import { MainProjectType } from "./MainProject";
import ProjectCard from "./ProjectCard";

export default function SmallProject({ project, db, inView }: MainProjectType) {
  const projectImages = useProjectImages(project, db);
  const projectText = useProjectText(project, db);

  return (
    projectImages &&
    projectText && (
      <ProjectCard
        title={projectText.name}
        images={projectImages}
        text={projectText}
        inView={inView}
      />
    )
  );
}
