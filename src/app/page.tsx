import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import TableSection from '@/components/sections/table-section';
import WhyChooseUsSection from '@/components/sections/why-choose-us-section';
import FeedbacksSection from '@/components/sections/feedbacks-section';
import PortoValeSection from '@/components/sections/porto-vale-section';
import ReviewsSection from '@/components/sections/reviews-section';
import FaqSection from '@/components/sections/faq-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <HeroSection />
        <TableSection />
        <WhyChooseUsSection />
        <FeedbacksSection />
        <PortoValeSection />
        <ReviewsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
