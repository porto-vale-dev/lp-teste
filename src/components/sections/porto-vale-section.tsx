'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ChevronRight } from 'lucide-react';

export default function PortoValeSection() {
  const facadeImage = PlaceHolderImages.find((img) => img.id === 'porto-vale-facade');

  const scrollToForm = () => {
    const formElement = document.getElementById('simulation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-secondary py-8 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between md:gap-10">
          
          <div className="flex flex-col justify-center gap-5 text-center md:text-left md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-foreground">
              Porto Vale: A maior corretora de consórcios do Brasil
            </h2>
            <p className="text-lg text-foreground/80">
              A Porto Vale é referência em consórcio Porto Seguro, unindo
              inovação, segurança e excelência para transformar sonhos em
              realidade.
            </p>
            <div className="mt-4 flex justify-center md:justify-start">
                <Button onClick={scrollToForm} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
                    Faça uma simulação com a Porto Vale
                    <ChevronRight className="h-5 w-5" />
                </Button>
            </div>
          </div>

          <div className="md:w-1/2">
            {facadeImage && (
              <Image
                src={facadeImage.imageUrl}
                alt={facadeImage.description}
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-auto shadow-lg"
                data-ai-hint={facadeImage.imageHint}
                loading="lazy"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
