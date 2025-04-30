import { servicesData } from '@/constants/index';
import { notFound } from 'next/navigation';

type Params = {
  params: {
    slug: string;
  };
};

export default function SingleServicePage({ params }: Params) {
  const service = servicesData.find((item) => item.id === params.hizmetId);
console.log(params)
  if (!service) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">{service.title}</h1>

      <p className="text-lg text-gray-700 mb-8">{service.description}</p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Neler Sunuyorum?</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          {service.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Kimler İçin Uygun?</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-2">
          {service.targetAudience.map((audience, index) => (
            <li key={index}>{audience}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}