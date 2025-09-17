'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Progress } from '@/components/ui/progress';

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
    <section className="my-8 md:my-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center text-[#685a5d]">
        
        <div className="mb-8 md:mb-10">
          {googleLogo && (
            <Image
              src={googleLogo.imageUrl}
              alt={googleLogo.description}
              width={250}
              height={83}
              className="mx-auto h-auto w-[200px] md:w-[250px]"
              data-ai-hint={googleLogo.imageHint}
              loading="lazy"
            />
          )}
          <p className="md:hidden text-2xl font-bold leading-6 mt-2">
            <span className="text-xl font-medium block">Avaliações da</span>
            Porto Vale no Google
          </p>
          <p className="hidden md:block text-2xl font-bold mt-2">
            Avaliações da Porto Vale no Google
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row md:items-start md:justify-center gap-8 md:gap-16">
          <div className="md:w-1/2 flex flex-col items-center md:items-start">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-8">
                <div className="text-center md:text-left">
                  <p className="text-8xl font-medium leading-none">4,9</p>
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
                  <p className="text-sm font-medium">3.356 comentários</p>
                </div>

                <div className="w-full max-w-sm md:max-w-xs space-y-2">
                  {ratingDistribution.map((item) => (
                    <div key={item.rating} className="flex items-center gap-2.5">
                      <p className="text-base font-medium w-8 text-center">{item.rating}</p>
                      <div className="flex-1 bg-gray-200 rounded-full h-2.5">
                         <div className="bg-[#fbc02d] h-2.5 rounded-full" style={{ width: `${item.percentage}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          </div>
          <div className="md:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
            {reviewImage1 && (
              <Image
                src={reviewImage1.imageUrl}
                alt={reviewImage1.description}
                width={260}
                height={145}
                className="rounded-lg shadow-lg object-contain w-full max-w-xs sm:max-w-none sm:w-1/2 md:w-auto"
                data-ai-hint={reviewImage1.imageHint}
                loading="lazy"
              />
            )}
            {reviewImage2 && (
              <Image
                src={reviewImage2.imageUrl}
                alt={reviewImage2.description}
                width={260}
                height={145}
                className="rounded-lg shadow-lg object-contain w-full max-w-xs sm:max-w-none sm:w-1/2 md:w-auto"
                data-ai-hint={reviewImage2.imageHint}
                loading="lazy"
              />
            )}
          </div>
        </div>

        <Button
          onClick={scrollToForm}
          size="lg"
          className="mt-10 bg-primary text-primary-foreground hover:bg-primary/90 w-full max-w-md uppercase font-bold"
        >
          Fazer uma simulação!
        </Button>
      </div>
    </section>
  );
}
