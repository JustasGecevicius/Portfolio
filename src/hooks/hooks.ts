import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, listAll, ref } from 'firebase/storage';
import { Firestore } from 'firebase/firestore/lite';

interface ProjectListType {
  MainProjects: string[];
  SmallProjects: string[];
}

export const useProjectList = (db: Firestore) => {
  const [projectList, setProjectList] = useState<ProjectListType>();

  useEffect(() => {
    getDoc(doc(db, 'ProjectsList', 'Structure')).then((res) => {
      setProjectList(res.data() as ProjectListType | undefined);
    });
  }, [db]);

  return projectList;
};

export const useProjectImages = (project: string | undefined, db: Firestore) => {
  const [projectImages, setProjectImages] = useState<string[]>();

  useEffect(() => {
    project &&
      listAll(ref(getStorage(), project)).then((res) => {
        const images = res['items'].map((imageRef) => getDownloadURL(imageRef));
        Promise.all(images).then((res) => {
          setProjectImages(res);
        });
      });
  }, [project, db]);

  return projectImages;
};

export interface ProjectTextType {
  link: string;
  linkGithub: string;
  name: string;
  p: string;
  tech: string[];
}

export const useProjectText = (project: string, db: Firestore) => {
  const [projectText, setProjectText] = useState<ProjectTextType>();

  useEffect(() => {
    getDoc(doc(db, `${project}`, 'Description')).then((res) => {
      setProjectText(res.data() as ProjectTextType);
    });
  }, [project, db]);

  return projectText;
};
