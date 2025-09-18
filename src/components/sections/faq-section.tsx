'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: 'O que é um consórcio?',
    answer:
      'Um consórcio é uma modalidade de compra baseada na união de pessoas com o objetivo de adquirir bens ou serviços por meio de autofinanciamento.',
  },
  {
    question: 'Como funciona a contemplação?',
    answer:
      'A contemplação ocorre quando um consorciado é sorteado ou faz uma oferta de lance e recebe o direito de utilizar o crédito para adquirir o bem.',
  },
  {
    question: 'Preciso dar entrada para participar?',
    answer:
      'Não. Normalmente, não é necessário dar entrada, apenas pagar as parcelas mensais conforme o contrato do grupo de consórcio.',
  },
];

export default function FaqSection() {
  return (
    <section className="bg-white text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Dúvidas sobre o consórcio?
          </h2>
          <p className="mt-4 text-lg md:text-xl text-foreground/70 max-w-lg mx-auto">
            Confira algumas dúvidas e informações que pode achar importante para
            realizar o seu investimento
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full mt-12 space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-primary text-primary-foreground rounded-3xl border-none shadow-md"
            >
              <AccordionTrigger className="p-5 text-left text-base md:text-lg hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="bg-card text-card-foreground p-6 rounded-b-3xl text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center text-xs text-foreground/60">
            <p>
                Taxa adm de 19% sendo a taxa antecipada diluída no plano, Fundo de
                Reserva de 2% e Seguro Prestamista de 0,038% para pessoas físicas.
                Parcelas reduzidas em -50% até a contemplação, após isto o valor será
                compensado nas parcelas seguintes. Parcelas reajustadas no aniversário
                do grupo. Para demais condições, consulte o Regulamento.
            </p>
        </div>
      </div>
    </section>
  );
}
