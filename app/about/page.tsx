import Image from 'next/image'
import Link from 'next/link'

const About = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="max-w-3xl mx-auto p-6 md:p-8 my-24 rounded-lg shadow-xl bg-secondary">
        <div className="flex justify-center mb-8">
<Image 
  src="/me.jpg"
  alt="Nevzat's portrait, a Front-end Developer"
  width={300}
  height={300}
  className="w-80 h-80 object-cover object-[50%_40%] rounded-full border-4 border-indigo-400 shadow-lg"
/>
        </div>
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800 dark:text-light">Hakkımda</h2>
        
        <p className="text-justify indent-8 font-medium text-lg leading-relaxed mb-4">
          İki yılı aşkın deneyime sahip bir <span className="text-indigo-400">Front-end Developer</span> olarak, kullanıcı dostu ve performans odaklı web
          uygulamaları geliştirmekteyim. Şu anda kendimi React, Typescript ve Next.js gibi modern Front-end
          teknolojilerinde geliştirmekteyim.
        </p>

        <p className="text-justify indent-8 font-medium text-lg leading-relaxed mb-4">
          Aynı zamanda, Full-Stack geliştirme deneyimimle hem frontend hem de backend alanında projeler tamamladım.
          PHP, Node.js, ve MySQL gibi teknolojilerle çalışarak, projelerin tüm süreçlerinde yer aldım.
        </p>

        <p className="text-justify indent-8 font-medium text-lg leading-relaxed mb-6">
          Kariyerim boyunca sürekli olarak öğrenmeye ve kendimi geliştirmeye odaklandım. Ekip çalışmasına önem veriyor
          ve her zaman en iyi çözümleri sunmayı hedefliyorum. Detaylara önem veren ve analitik düşünen bir
          profesyonelim. <span className="text-indigo-400">Yeni teknolojilere olan ilgimle</span>, yazılım geliştirme alanında kendimi daha da ileriye
          taşımak için fırsatlar arıyorum.
        </p>

        <div className="flex justify-center">
          <Link href="/contact" className="bg-indigo-400 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:bg-indigo-500 transition">
            İletişime Geç
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;