'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Image from 'next/image';

const features = [
  {
    imageId: 'advantage-no-interest',
    title: 'Sem juros e sem entrada',
    description: 'O consórcio não exige que os indivíduos tenham um alto valor inicial para investir e não cobram taxas de juros.',
    imageHint: 'no interest icon'
  },
  {
    imageId: 'advantage-flexibility',
    title: 'Flexibilidade para usar o crédito',
    description: 'Com o consórcio você pode usar seu crédito para comprar um bem a vista, o que te permite mais opções no momento da compra.',
    imageHint: 'flexibility icon'
  },
  {
    imageId: 'advantage-less-bureaucracy',
    title: 'Menos burocracia',
    description: 'No consórcio são necessários apenas alguns documentos básicos, diferente do financiamento.',
    imageHint: 'contract icon'
  },
  {
    imageId: 'advantage-custom',
    title: 'Personalizado',
    description: 'Os consórcios oferecem opções para diversos tipos de investimento.',
    imageHint: 'custom icon'
  },
];

export default function WhyChooseUsSection() {
  const scrollToForm = () => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const formElement = document.getElementById('simulation-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            As maiores vantagens do <b>Consórcio Porto</b>
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const image = PlaceHolderImages.find((img) => img.id === feature.imageId);
            return (
              <Card key={feature.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card text-card-foreground">
                <CardHeader>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={feature.title}
                        width={50}
                        height={50}
                        className="object-contain"
                        data-ai-hint={image.imageHint}
                      />
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                  <p className="mt-2 text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button onClick={scrollToForm} size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto font-bold uppercase rounded-full">
            Fazer uma simulação!
          </Button>
        </div>
      </div>
    </section>
  );
}
