import Header from "@/components/Header"
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import { theme } from "@/themes/mui-themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./globals.scss"

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
          <IntroSection />
          <ServicesSection />
        </main>
      </ThemeProvider>
    </>
  );
}
