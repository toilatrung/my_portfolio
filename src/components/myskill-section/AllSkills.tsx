import SingleSkill from './SingleSkill';
import htmlIcon from '../../assets/skill-icons/html_pixel.png';
import cssIcon from '../../assets/skill-icons/css_pixel.png';
import jsIcon from '../../assets/skill-icons/javascript_pixel.png';
import tsIcon from '../../assets/skill-icons/typescript_pixel.png';
import reactIcon from '../../assets/skill-icons/react_pixel.png';
import pythonIcon from '../../assets/skill-icons/python_pixel.png';
import cppIcon from '../../assets/skill-icons/c++_pixel.gif';
import sqlIcon from '../../assets/skill-icons/sql_pixel.png';

interface SkillData {
  name: string;
  iconSrc: string;
}

const skills: SkillData[] = [
  { name: 'HTML', iconSrc: htmlIcon },
  { name: 'CSS', iconSrc: cssIcon },
  { name: 'JavaScript', iconSrc: jsIcon },
  { name: 'TypeScript', iconSrc: tsIcon },
  { name: 'React', iconSrc: reactIcon },
  { name: 'Python', iconSrc: pythonIcon },
  { name: 'C++', iconSrc: cppIcon },
  { name: 'SQL', iconSrc: sqlIcon },
];

const AllSkills = () => {
  return (
    <div className='flex items-center justify-center relative gap-4 max-w-[1200px] mx-auto flex-wrap p-4'>
      {skills.map((item) => (
        <SingleSkill
          key={item.name}
          text={item.name}
          imgSvg={<img src={item.iconSrc} alt={`${item.name} icon`} className="w-16 h-16 object-contain" />}
        />
      ))}
    </div>
  );
};

export default AllSkills;
