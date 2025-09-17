
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function TableSection() {
  const tableMobile = PlaceHolderImages.find((img) => img.id === 'table-mobile');
  const tableDesktop = PlaceHolderImages.find((img) => img.id === 'table-desktop');

  const scrollToForm = () => {
    const formElement = document.getElementById('simulation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white text-black py-10 md:py-16 text-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h2 className="text-2xl md:text-4xl font-light">
          Confira os <b className="font-bold">melhores planos</b> para você aproveitar
        </h2>
        
        {tableMobile && (
          <div className="md:hidden mt-8 w-full">
            <Image
              src={tableMobile.imageUrl}
              alt={tableMobile.description}
              width={400}
              height={585}
              className="mx-auto"
              data-ai-hint={tableMobile.imageHint}
              loading="lazy"
            />
          </div>
        )}

        {tableDesktop && (
          <div className="hidden md:block mt-8 w-full max-w-5xl">
            <Image
              src={tableDesktop.imageUrl}
              alt={tableDesktop.description}
              width={1900}
              height={550}
              className="mx-auto"
              data-ai-hint={tableDesktop.imageHint}
              loading="lazy"
            />
          </div>
        )}

        <Button
          onClick={scrollToForm}
          size="lg"
          className="mt-8 bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto uppercase font-bold"
        >
          Fazer uma simulação!
        </Button>
      </div>
    </section>
  );
}
