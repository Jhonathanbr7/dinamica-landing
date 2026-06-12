import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import LocationGallery from "@/components/LocationGallery";
import LeadForm from "@/components/LeadForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Services />
        <LocationGallery />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
