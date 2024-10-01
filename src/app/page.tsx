import Header from "@/components/Header"
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import "./globals.scss"
import "@fontsource/plus-jakarta-sans"

export default function Home() {
  return (
    <>
        <Header />
        <main>
          <IntroSection />
          <ServicesSection />
        </main>
    </>
  );
}
