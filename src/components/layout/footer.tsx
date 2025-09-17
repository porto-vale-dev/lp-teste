'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const socialLinks = [
  { href: '#', icon: Facebook, name: 'Facebook' },
  { href: '#', icon: Instagram, name: 'Instagram' },
  { href: '#', icon: Linkedin, name: 'LinkedIn' },
  { href: '#', icon: Youtube, name: 'YouTube' },
];

const footerLinks = {
  Institucional: [
    { href: '#', label: 'Sobre Nós' },
    { href: '#', label: 'Blog' },
    { href: '#', label: 'Contato' },
  ],
  Ajuda: [
    { href: '#', label: 'Perguntas Frequentes' },
    { href: '#', label: 'Portal do Cliente' },
    { href: '#', label: 'Política de Privacidade' },
  ],
  Consórcios: [
    { href: '#', label: 'Imóveis' },
    { href: '#', label: 'Veículos' },
    { href: '#', label: 'Serviços' },
  ],
};

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  const logoImage = PlaceHolderImages.find((img) => img.id === 'logo');
  const bgImage = PlaceHolderImages.find((img) => img.id === 'footer-bg');

  return (
    <footer className="bg-card text-foreground">
      <div className="relative py-16 text-center text-white">
        {bgImage && (
          <Image
            src={bgImage.imageUrl}
            alt={bgImage.description}
            fill
            className="object-cover"
            data-ai-hint={bgImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">
            Ficou com alguma dúvida?
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Nossa equipe está pronta para te ajudar a encontrar o plano perfeito.
          </p>
          <Button size="lg" className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
            FALE CONOSCO
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            {logoImage && (
               <Image
                src={logoImage.imageUrl}
                alt={logoImage.description}
                width={180}
                height={45}
                data-ai-hint={logoImage.imageHint}
                className="h-auto"
              />
            )}
            <p className="text-sm text-foreground/70">
              Transformando seus sonhos em realidade desde 2008.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-foreground/60 hover:text-primary">
                  <social.icon className="h-6 w-6" />
                   <span className="sr-only">{social.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-bold text-foreground">{title}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-foreground/70 hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="text-center text-xs text-foreground/60">
          <p>&copy; {currentYear} PortoVale Consórcios. Todos os direitos reservados.</p>
          <p className="mt-2">
            PortoVale Administradora de Consórcios Ltda - CNPJ: 00.000.000/0001-00.
          </p>
          <p className="mt-1">
            Fiscalizado e autorizado pelo Banco Central do Brasil.
          </p>
        </div>
      </div>
    </footer>
  );
}
