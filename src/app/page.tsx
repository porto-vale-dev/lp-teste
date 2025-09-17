import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import TableSection from '@/components/sections/table-section';
import WhyChooseUsSection from '@/components/sections/why-choose-us-section';
import DreamsSection from '@/components/sections/dreams-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import BlogSection from '@/components/sections/blog-section';
import FeedbacksSection from '@/components/sections/feedbacks-section';
import PortoValeSection from '@/components/sections/porto-vale-section';
import ReviewsSection from '@/components/sections/reviews-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <TableSection />
        <WhyChooseUsSection />
        <FeedbacksSection />
        <PortoValeSection />
        <ReviewsSection />
        <DreamsSection />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
