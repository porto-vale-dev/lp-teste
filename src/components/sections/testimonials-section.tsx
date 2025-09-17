'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Quote } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";


const testimonials = [
  {
    id: 1,
    imageId: 'testimonial-1',
    name: 'João Silva',
    location: 'São Paulo, SP',
    quote: 'A PortoVale realizou meu sonho do carro novo. O processo foi transparente e muito mais barato que um financiamento. Recomendo a todos!',
    imageHint: 'person smiling'
  },
  {
    id: 2,
    imageId: 'testimonial-2',
    name: 'Maria Oliveira',
    location: 'Rio de Janeiro, RJ',
    quote: 'Consegui comprar meu apartamento graças ao consórcio da PortoVale. A equipe foi super atenciosa e me ajudou em todas as etapas.',
    imageHint: 'woman portrait'
  },
  {
    id: 3,
    imageId: 'testimonial-3',
    name: 'Carlos Pereira',
    location: 'Belo Horizonte, MG',
    quote: 'Investi em uma carta de crédito para ampliar meus negócios e foi a melhor decisão. Flexibilidade e economia que só o consórcio oferece.',
    imageHint: 'man portrait'
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            O que nossos clientes dizem
          </h2>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
              stopOnInteraction: true,
            }),
          ]}
          className="w-full max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const image = PlaceHolderImages.find((img) => img.id === testimonial.imageId);
              return (
                <CarouselItem key={testimonial.id}>
                  <div className="p-4">
                    <Card className="border-none shadow-none">
                      <CardContent className="flex flex-col items-center text-center p-6">
                        <Quote className="h-10 w-10 text-primary/50 mb-4" />
                        <p className="text-foreground/80 italic">"{testimonial.quote}"</p>
                        <div className="mt-6 flex items-center gap-4">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={testimonial.name}
                              width={64}
                              height={64}
                              className="rounded-full object-cover"
                              data-ai-hint={testimonial.imageHint}
                            />
                          )}
                          <div>
                            <p className="font-bold text-foreground">{testimonial.name}</p>
                            <p className="text-sm text-foreground/60">{testimonial.location}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
