import Footer from '@/components/layout/footer';
import TableSection from '@/components/sections/table-section';
import FeedbacksSection from '@/components/sections/feedbacks-section';

export default function ObrigadoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow">
        <TableSection />
        <FeedbacksSection />
      </main>
      <Footer />
    </div>
  );
}
