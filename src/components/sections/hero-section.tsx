'use client';

import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    id: 1,
    imageId: 'hero-1',
    headline: 'Realize o sonho da casa própria',
    subtext: 'Com o consórcio de imóveis, você planeja a compra do seu lar sem juros.',
    imageHint: 'happy family home'
  },
  {
    id: 2,
    imageId: 'hero-2',
    headline: 'Conquiste seu carro novo',
    subtext: 'Planos flexíveis para você sair de carro zero, sem pagar juros abusivos.',
    imageHint: 'driving new car'
  },
  {
    id: 3,
    imageId: 'hero-3',
    headline: 'Invista no seu futuro',
    subtext: 'Utilize o consórcio como uma forma inteligente de poupança e investimento.',
    imageHint: 'couple celebration'
  },
];

export default function HeroSection() {
  return (
    <section className="relative w-full h-[600px] md:h-[800px] -mt-20">
      <Carousel 
        className="w-full h-full" 
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {slides.map((slide) => {
            const image = PlaceHolderImages.find((img) => img.id === slide.imageId);
            return (
              <CarouselItem key={slide.id}>
                <div className="relative w-full h-[600px] md:h-[800px]">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                      priority={slide.id === 1}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/50" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="container mx-auto px-4 text-center text-white">
                      <h1 className="text-4xl md:text-6xl font-bold font-headline">
                        {slide.headline}
                      </h1>
                      <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto">
                        {slide.subtext}
                      </p>
                      <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
                        QUERO SIMULAR
                      </Button>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/40 border-none" />
        <CarouselNext className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 text-white bg-white/20 hover:bg-white/40 border-none" />
      </Carousel>
    </section>
  );
}
