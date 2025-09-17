import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import WhyChooseUsSection from '@/components/sections/why-choose-us-section';
import DreamsSection from '@/components/sections/dreams-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import BlogSection from '@/components/sections/blog-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <WhyChooseUsSection />
        <DreamsSection />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
