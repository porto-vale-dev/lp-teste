'use client';

import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/portovaleconsorcios',
    imageId: 'social-facebook',
    imageHint: 'facebook logo',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/portovaleconsorcio/',
    imageId: 'social-instagram',
    imageHint: 'instagram logo',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCA_32445-gHoQEaN_dljMyA',
    imageId: 'social-youtube',
    imageHint: 'youtube logo',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/portovaleconsorcio/posts/?feedView=all',
    imageId: 'social-linkedin',
    imageHint: 'linkedin logo',
  },
];

export default function Footer() {
  const portoValeLogo = PlaceHolderImages.find((img) => img.id === 'logo-porto-vale-footer');
  const portoBankLogo = PlaceHolderImages.find((img) => img.id === 'logo-porto-bank');
  const bancoCentralLogo = PlaceHolderImages.find((img) => img.id === 'logo-banco-central');
  const abacLogo = PlaceHolderImages.find((img) => img.id === 'logo-abac');

  return (
    <footer className="bg-gradient-to-bl from-cyan-500 to-blue-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between text-center gap-5">
        
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {portoValeLogo && (
              <Image src={portoValeLogo.imageUrl} alt={portoValeLogo.description} width={200} height={50} className="h-auto" data-ai-hint={portoValeLogo.imageHint} />
            )}
            {portoBankLogo && (
              <a href="https://www.portoseguro.com.br/" target="_blank" rel="noopener noreferrer">
                <Image src={portoBankLogo.imageUrl} alt={portoBankLogo.description} width={200} height={50} className="h-auto" data-ai-hint={portoBankLogo.imageHint} />
              </a>
            )}
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4">
            {bancoCentralLogo && (
               <a href="https://www.bcb.gov.br/" target="_blank" rel="noopener noreferrer">
                <Image src={bancoCentralLogo.imageUrl} alt={bancoCentralLogo.description} width={150} height={40} className="h-auto" data-ai-hint={bancoCentralLogo.imageHint} />
              </a>
            )}
            {abacLogo && (
              <a href="https://abac.org.br/" target="_blank" rel="noopener noreferrer">
                <Image src={abacLogo.imageUrl} alt={abacLogo.description} width={150} height={40} className="h-auto" data-ai-hint={abacLogo.imageHint} />
              </a>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2.5 my-5 md:my-0">
          <p>Atendimento: 0800 494-6600</p>
          <p>CNPJ 07.081.058/0001-56</p>
          <Link href="https://www.consorcioportovale.com.br/politicas" className="underline">
            Políticas de privacidade e coleta de dados
          </Link>
        </div>

        <div className="flex flex-col items-center gap-2.5">
          <h3 className="text-lg font-semibold">Acompanhe nossas redes sociais</h3>
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const image = PlaceHolderImages.find((img) => img.id === social.imageId);
              return (
                <Link key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-transform hover:scale-110">
                  {image && (
                    <Image 
                      src={image.imageUrl} 
                      alt={image.description}
                      width={32} 
                      height={32} 
                      className="h-8 w-8"
                      data-ai-hint={social.imageHint}
                    />
                  )}
                  <span className="sr-only">{social.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
