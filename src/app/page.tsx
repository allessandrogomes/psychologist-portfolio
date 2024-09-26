import Header from "@/components/Header"
import IntroSection from "@/components/IntroSection";
import { theme } from "@/themes/mui-themes";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <main>
          <IntroSection />
        </main>
      </ThemeProvider>
    </>
  );
}
