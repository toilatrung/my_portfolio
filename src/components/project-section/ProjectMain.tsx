import ProjectText from './ProjectText';
import SingleProject from './SingleProject';

import troyImage from '../../assets/project-thumbnail/troycourselab.png';
import libraryImage from '../../assets/project-thumbnail/thuvienthcs.png';
import tutorImage from '../../assets/project-thumbnail/giasu-ai.png';
import trackerImage from '../../assets/project-thumbnail/troytracker.png';

interface ProjectData {
  name: string;
  title: string;
  year: number;
  align: 'left' | 'right';
  image: string;
  link: string;
}

const projects: ProjectData[] = [
  {
    name: 'Troy Course Lab',
    title: 'Founder & Project Executive',
    year: 2025,
    align: 'right',
    image: troyImage,
    link: '#',
  },
  {
    name: 'School e-Library',
    title: 'FullStack Developer',
    year: 2024,
    align: 'left',
    image: libraryImage,
    link: '#',
  },
  {
    name: 'AI Tutor',
    title: 'Front-End Developer',
    year: 2025,
    align: 'right',
    image: tutorImage,
    link: '#',
  },
  {
    name: 'Troy Tracker',
    title: 'Founder & Project Executive',
    year: 2025,
    align: 'left',
    image: trackerImage,
    link: '#',
  },
];

const ProjectMain = () => {
  return (
    <div id='projects' className="px-4 max-w-[1200px] mx-auto">
      <ProjectText />
      <div className="flex flex-col gap-10 max-w-[900px] mx-auto mt-10">
        {projects.map((proj) => (
          <SingleProject
            key={proj.name}
            name={proj.name}
            title={proj.title}
            year={proj.year}
            align={proj.align}
            image={proj.image}
            link={proj.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectMain;
