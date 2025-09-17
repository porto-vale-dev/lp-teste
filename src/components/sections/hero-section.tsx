'use client';

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import SimulationForm from '@/components/simulation-form';
import { Suspense } from 'react';
import { Skeleton } from '../ui/skeleton';

function SimulationFormWrapper() {
  return (
    <Suspense fallback={<Skeleton className="h-[450px] w-full max-w-md rounded-2xl" />}>
      <SimulationForm />
    </Suspense>
  )
}


export default function HeroSection() {
  const logoPorto = PlaceHolderImages.find((img) => img.id === 'logo-porto');
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-1');

  return (
    <section className="bg-primary w-full relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between min-h-screen pt-20 lg:pt-0 pb-10 lg:pb-0">
        
        <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:gap-8">
            {/* Content */}
            <div className="text-white text-center lg:text-left lg:w-1/3 z-10 order-1 lg:order-1">
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
            </div>

            {/* Image */}
            <div className="w-full max-w-[80%] md:max-w-[55%] mx-auto mt-8 lg:mt-0 lg:w-1/3 order-2 lg:order-2 flex items-center justify-center">
            {heroImage && (
                <div className="relative w-full aspect-[4/3]">
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-contain"
                        data-ai-hint={heroImage.imageHint}
                    />
                </div>
                )}
            </div>

            {/* Form */}
            <div className="w-full lg:w-1/3 flex justify-center lg:justify-end items-center mt-10 lg:mt-0 z-10 order-3 lg:order-3">
            <div className="w-full max-w-md">
                <SimulationFormWrapper />
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}
