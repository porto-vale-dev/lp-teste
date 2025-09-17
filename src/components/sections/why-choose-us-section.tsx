import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Handshake, PiggyBank, KeyRound, Award } from 'lucide-react';

const features = [
  {
    icon: Handshake,
    title: 'Sem Juros',
    description: 'Diferente do financiamento, no consórcio você não paga juros.',
  },
  {
    icon: PiggyBank,
    title: 'Poder de Compra',
    description: 'Com a carta de crédito, você tem o poder de compra à vista.',
  },
  {
    icon: KeyRound,
    title: 'Flexibilidade',
    description: 'Use seu crédito para comprar imóveis, veículos e muito mais.',
  },
  {
    icon: Award,
    title: 'Segurança',
    description: 'Um sistema regulamentado pelo Banco Central do Brasil.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Por que escolher a PortoVale?
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Descubra as vantagens que fazem do nosso consórcio a melhor opção para a sua conquista.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-8 w-8" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                <p className="mt-2 text-foreground/70">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            QUERO SIMULAR
          </Button>
        </div>
      </div>
    </section>
  );
}
