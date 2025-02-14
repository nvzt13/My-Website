import Image from 'next/image';

interface SkillProps {
  name: string;
  level: string;
  icon: string;
}

const Skill: React.FC<SkillProps> = ({ name, level, icon }) => {
  return (
    <div className="bg-card rounded-lg p-4 shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-105 flex flex-col items-center justify-center">
      <Image 
        width={60} 
        height={60} 
        src={icon} 
        alt={`${name} icon`} 
        className="w-16 h-16 mb-4 brightness-110"
      />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-md">{level}</p>
    </div>
  );
};

export default Skill;