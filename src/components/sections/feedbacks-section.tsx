'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';

type VideoId = 'main' | 'secondary1' | 'secondary2' | 'secondary3';

const videoData = {
  main: {
    id: 'main',
    imageId: 'feedback-thumb-main',
    videoId: 'xufSuJFKnTs',
    imageHint: 'man smiling',
  },
  secondary: [
    {
      id: 'secondary1',
      imageId: 'feedback-thumb-secondary1',
      videoId: '-Y_tEwgqn3M',
      imageHint: 'man in office',
    },
    {
      id: 'secondary2',
      imageId: 'feedback-thumb-secondary2',
      videoId: 'WLlDpL1s9gs',
      imageHint: 'young man',
    },
    {
      id: 'secondary3',
      imageId: 'feedback-thumb-secondary3',
      videoId: 'Er0oo3vwRVg',
      imageHint: 'smiling woman',
    },
  ],
};

export default function FeedbacksSection() {
  const [activeVideo, setActiveVideo] = useState<VideoId | null>(null);

  const handlePlay = (videoId: VideoId) => {
    setActiveVideo(videoId);
  };

  const scrollToForm = () => {
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const formElement = document.getElementById('simulation-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };


  const MainVideo = ({ id, imageId, videoId, imageHint }: { id: VideoId, imageId: string, videoId: string, imageHint: string }) => {
    const image = PlaceHolderImages.find((img) => img.id === imageId);
    return (
      <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg cursor-pointer mb-8">
        {activeVideo === id ? (
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        ) : (
          image && (
            <div onClick={() => handlePlay(id)}>
              <Image
                src={image.imageUrl}
                alt={image.description}
                fill
                className="object-cover"
                data-ai-hint={imageHint}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="white" className="opacity-80 hover:opacity-100 transition-opacity"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>
              </div>
            </div>
          )
        )}
      </div>
    );
  };

  return (
    <section className="bg-white text-foreground py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:gap-12 md:items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
              Ainda tem dúvidas sobre o Consórcio Porto?
            </h2>
            <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto md:mx-0">
              Conheça algumas histórias de nossos clientes que tiveram seus objetivos conquistados.
            </p>
            <Button
              onClick={scrollToForm}
              size="lg"
              className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90 hidden md:inline-flex"
            >
              Fazer uma simulação!
            </Button>
          </div>
          <div className="md:w-1/2">
            <MainVideo
              id={videoData.main.id as VideoId}
              imageId={videoData.main.imageId}
              videoId={videoData.main.videoId}
              imageHint={videoData.main.imageHint}
            />
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {videoData.secondary.map((video) => (
            <MainVideo
              key={video.id}
              id={video.id as VideoId}
              imageId={video.imageId}
              videoId={video.videoId}
              imageHint={video.imageHint}
            />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
           <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
            >
              Fazer uma simulação!
            </Button>
        </div>
      </div>
    </section>
  );
}
