
import { Button } from '@/components/ui/button';
import Footer from '@/components/layout/footer';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ObrigadoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow flex items-center justify-center text-center px-4">
        <div className="flex flex-col items-center gap-6 max-w-lg">
          <CheckCircle className="h-20 w-20 text-green-500" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary font-headline">
            Obrigado!
          </h1>
          <p className="text-lg md:text-xl text-foreground/80">
            Sua simulação foi enviada com sucesso. Em breve, um de nossos
            consultores entrará em contato com você.
          </p>
          <Button asChild size="lg" className="mt-4 rounded-full font-bold uppercase">
            <Link href="/">Voltar para o Início</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    