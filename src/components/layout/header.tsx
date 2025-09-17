'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#', label: 'O CONSÓRCIO' },
  { href: '#', label: 'CONTEMPLADOS' },
  { href: '#', label: 'VANTAGENS' },
  { href: '#', label: 'BLOG' },
  { href: '#', label: 'PERGUNTAS FREQUENTES' },
  { href: '#', label: 'CONTATO' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const logoImage = PlaceHolderImages.find((img) => img.id === 'logo');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-card shadow-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center">
            {logoImage && (
              <Image
                src={logoImage.imageUrl}
                alt={logoImage.description}
                width={150}
                height={40}
                data-ai-hint={logoImage.imageHint}
                className="h-auto"
              />
            )}
            <span className="sr-only">PortoVale Redux</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button className="hidden lg:flex bg-accent text-accent-foreground hover:bg-accent/90">
              SIMULE AGORA
            </Button>

            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Abrir menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-8">
                       <Link href="/" className="flex items-center">
                         {logoImage && (
                          <Image
                            src={logoImage.imageUrl}
                            alt={logoImage.description}
                            width={150}
                            height={40}
                            data-ai-hint={logoImage.imageHint}
                            className="h-auto"
                           />
                         )}
                       </Link>
                      <SheetClose asChild>
                         <Button variant="ghost" size="icon">
                           <X className="h-6 w-6" />
                         </Button>
                      </SheetClose>
                    </div>
                    <nav className="flex flex-col space-y-4">
                      {navLinks.map((link) => (
                        <SheetClose asChild key={link.label}>
                          <Link
                            href={link.href}
                            className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </nav>
                    <Button className="mt-8 w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      SIMULE AGORA
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
