import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const dreams = [
  { id: 'dream-car', label: 'Carro', imageHint: 'red car' },
  { id: 'dream-house', label: 'Imóvel', imageHint: 'modern house' },
  { id: 'dream-motorcycle', label: 'Moto', imageHint: 'motorcycle road' },
  { id: 'dream-truck', label: 'Caminhão', imageHint: 'pickup truck' },
  { id: 'dream-tractor', label: 'Maquinário', imageHint: 'tractor field' },
  { id: 'dream-investment', label: 'Investimento', imageHint: 'financial investment' },
];

export default function DreamsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
          Sonhos que realizamos
        </h2>
        <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
          Veja tudo o que você pode conquistar com o consórcio. O seu próximo sonho está aqui.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {dreams.map((dream) => {
            const image = PlaceHolderImages.find((img) => img.id === dream.id);
            return (
              <div key={dream.id} className="group relative aspect-square overflow-hidden rounded-lg shadow-lg">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    data-ai-hint={dream.imageHint}
                  />
                )}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-xl font-bold text-white font-headline">{dream.label}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
