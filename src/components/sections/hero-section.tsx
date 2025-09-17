'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import SimulationForm from '@/components/simulation-form';

export default function HeroSection() {
  const logoPorto = PlaceHolderImages.find((img) => img.id === 'logo-porto');
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');

  return (
    <section className="bg-primary w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between min-h-screen pt-24 lg:pt-0">
        
        {/* Content */}
        <div className="text-white text-center lg:text-left lg:w-1/2 lg:pr-12">
          {logoPorto && (
            <Image
              src={logoPorto.imageUrl}
              alt={logoPorto.description}
              width={200}
              height={50}
              data-ai-hint={logoPorto.imageHint}
              className="h-auto mx-auto lg:mx-0 mb-6"
            />
          )}
          <h1 className="text-3xl md:text-5xl font-bold font-headline leading-tight">
            A melhor forma de comprar o seu Imóvel é com o Consórcio!
          </h1>
          <div className="w-full max-w-[80%] md:max-w-[90%] mx-auto mt-8 lg:hidden">
             {heroImage && (
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={heroImage.imageHint}
                    />
                </div>
              )}
           </div>
        </div>

        {/* Form */}
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0">
           <div className="hidden lg:block w-full max-w-[90%] lg:pl-12">
             {heroImage && (
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-cover"
                        data-ai-hint={heroImage.imageHint}
                    />
                </div>
              )}
           </div>
           <div className="w-full">
            <SimulationForm />
           </div>
        </div>
      </div>
    </section>
  );
}