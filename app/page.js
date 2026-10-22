import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ImmigrationAutomation from "@/components/ImmigrationAutomation";
import ProcessSection from "@/components/ProcessSection";
import TrustBenchmark from "@/components/TrustBenchmark";
import Testimonials from "@/components/Testimonials";
import AboutFounder from "@/components/AboutFounder";

import LeadMagnet from "@/components/LeadMagnet";
import BookingSection from "@/components/BookingSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

// Lazy-load heavier visual simulators to optimize Core Web Vitals (LCP, TBT, CLS)
const ApiSimulator = dynamic(() => import("@/components/ApiSimulator"), {
  ssr: true,
  loading: () => (
    <div className="mx-auto my-12 h-64 max-w-5xl rounded-2xl border border-border/40 bg-surface/30 animate-pulse" />
  ),
});

const IntegrationMatrix = dynamic(() => import("@/components/IntegrationMatrix"), {
  ssr: true,
  loading: () => (
    <div className="mx-auto my-12 h-96 max-w-4xl rounded-2xl border border-border/40 bg-surface/30 animate-pulse" />
  ),
});

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <ApiSimulator />
      <IntegrationMatrix />
      <Services />
      <ImmigrationAutomation />
      <ProcessSection />
      <TrustBenchmark />
      <Testimonials />
      <AboutFounder />
  
      <LeadMagnet />
      <BookingSection />
      <FAQ />
      <Footer />
    </main>
  );
}
