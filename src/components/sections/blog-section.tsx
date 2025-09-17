import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 1,
    imageId: 'blog-1',
    title: 'Planejamento Financeiro: Como o Consórcio Pode Ajudar',
    imageHint: 'financial planning',
  },
  {
    id: 2,
    imageId: 'blog-2',
    title: '5 Dicas Para Escolher o Consórcio de Carro Ideal',
    imageHint: 'car keys',
  },
  {
    id: 3,
    imageId: 'blog-3',
    title: 'Investir em Imóveis com Carta de Crédito: Vale a Pena?',
    imageHint: 'house model',
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Últimas do nosso blog
          </h2>
          <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">
            Fique por dentro das novidades e dicas do universo dos consórcios.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {posts.map((post) => {
            const image = PlaceHolderImages.find((img) => img.id === post.imageId);
            return (
              <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                {image && (
                  <div className="relative aspect-video">
                    <Image
                      src={image.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
                <div className='flex flex-col flex-grow p-6'>
                  <CardTitle className="text-lg font-bold leading-snug flex-grow">{post.title}</CardTitle>
                  <div className="mt-4">
                    <Button asChild variant="link" className="text-accent p-0 hover:text-accent/80">
                      <Link href="#">
                        LEIA MAIS <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
