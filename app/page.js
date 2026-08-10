import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ApiSimulator from "@/components/ApiSimulator";
import IntegrationMatrix from "@/components/IntegrationMatrix";
import Services from "@/components/Services";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <ApiSimulator />
      <IntegrationMatrix />
      <Services />
      <BookingSection />
      <FAQ />
      <Footer />
    </main>
  );
}
