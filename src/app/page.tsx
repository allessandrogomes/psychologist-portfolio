import Header from "@/components/Header"
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import "./globals.scss"
import "@fontsource/plus-jakarta-sans"
import TestemonialsSection from "@/components/TestemonialsSection";
import AboutSection from "@/components/AboutSection";
import CallSection from "@/components/CalllSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
        <Header />
        <main>
          <IntroSection />
          <ServicesSection />
          <TestemonialsSection />
          <AboutSection />
          <CallSection />
        </main>
        <Footer />
    </>
  );
}
