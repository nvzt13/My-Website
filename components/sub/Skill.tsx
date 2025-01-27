import Image from 'next/image';

interface SkillProps {
  name: string;
  level: string;
  icon: string;
}

const Skill: React.FC<SkillProps> = ({ name, level, icon }) => {
  return (
    <div className="bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 rounded-lg p-6 shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 flex flex-col items-center justify-center">
      <Image 
        width={60} 
        height={60} 
        src={icon} 
        alt={`${name} icon`} 
        className="w-16 h-16 mb-4 brightness-110"
      />
      <h3 className="text-xl font-semibold text-dark dark:text-gray-200">{name}</h3>
      <p className="text-md text-dark dark:text-gray-400">{level}</p>
    </div>
  );
};

export default Skill;