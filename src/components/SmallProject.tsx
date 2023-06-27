import { useProjectImages, useProjectText } from '../hooks/hooks';
import { MainProjectType } from './MainProject';
import ProjectCard from './ProjectCard';

export const SmallProject = ({ project, db }: MainProjectType) => {
  const projectImages = useProjectImages(project, db);
  const projectText = useProjectText(project, db);

  return (
    projectImages &&
    projectText && (
      <ProjectCard title={projectText.name} images={projectImages} text={projectText} />
    )
  );
};
