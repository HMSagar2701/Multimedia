import { OurAgency } from "@/components/Agency";
import { Features } from "@/components/Features";
import Footer from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LogoTicker } from "@/components/LogoTicker";
import { Solutions } from "@/components/Solution";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
    <Hero />
    <LogoTicker />
    <Features />
    <Solutions />
    <OurAgency />
    <Testimonials />
    <Footer />
    </>
    );
}
