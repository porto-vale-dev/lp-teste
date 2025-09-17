'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const ratingDistribution = [
  { rating: 5, percentage: 95 },
  { rating: 4, percentage: 20 },
  { rating: 3, percentage: 10 },
  { rating: 2, percentage: 5 },
  { rating: 1, percentage: 2 },
];

export default function ReviewsSection() {
  const googleLogo = PlaceHolderImages.find((img) => img.id === 'google-logo');
  const starIcon = PlaceHolderImages.find((img) => img.id === 'star-icon');
  const reviewImage1 = PlaceHolderImages.find((img) => img.id === 'review-image-1');
  const reviewImage2 = PlaceHolderImages.find((img) => img.id === 'review-image-2');

  const scrollToForm = () => {
    const formElement = document.getElementById('simulation-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="my-4 md:my-6 py-8 md:py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center text-[#685a5d]">
        
        {googleLogo && (
            <div className="mb-8">
                <Image
                src={googleLogo.imageUrl}
                alt={googleLogo.description}
                width={200}
                height={70}
                className="h-auto mx-auto"
                data-ai-hint={googleLogo.imageHint}
                />
                <p className="mt-4 text-lg md:text-xl font-semibold text-gray-600">
                Avaliações da Porto Vale no Google
                </p>
            </div>
        )}
        
        <div className="w-full grid md:grid-cols-2 gap-8 mb-16">
          {reviewImage1 && (
            <Image
              src={reviewImage1.imageUrl}
              alt={reviewImage1.description}
              width={570}
              height={230}
              className="rounded-lg shadow-lg object-contain w-full h-auto"
              data-ai-hint={reviewImage1.imageHint}
              loading="lazy"
            />
          )}
          {reviewImage2 && (
            <Image
              src={reviewImage2.imageUrl}
              alt={reviewImage2.description}
              width={570}
              height={230}
              className="rounded-lg shadow-lg object-contain w-full h-auto"
              data-ai-hint={reviewImage2.imageHint}
              loading="lazy"
            />
          )}
        </div>

        <div className="w-full flex flex-col md:flex-row items-center md:justify-start gap-8 md:gap-16">
          <div className="flex items-center gap-5 md:gap-8">
            <div className="text-center md:text-left">
              <p className="text-8xl font-medium leading-none text-gray-700">4,9</p>
              {starIcon && (
                <div className="flex justify-center md:justify-start gap-1 my-2">
                  {Array(5).fill(0).map((_, i) => (
                    <Image
                      key={i}
                      src={starIcon.imageUrl}
                      alt="estrela"
                      width={18}
                      height={18}
                      data-ai-hint={starIcon.imageHint}
                    />
                  ))}
                </div>
              )}
              <p className="text-sm font-medium text-gray-600">3.356 comentários</p>
            </div>
          </div>
          <div className="w-full max-w-sm md:max-w-xs space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.rating} className="flex items-center gap-2.5">
                <p className="text-base font-medium w-4 text-center text-gray-600">{item.rating}</p>
                <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                    <div className="bg-[#fbc02d] h-2.5 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          onClick={scrollToForm}
          size="lg"
          className="mt-16 bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto md:max-w-md uppercase font-bold rounded-full"
        >
          Fazer uma simulação!
        </Button>
      </div>
    </section>
  );
}
