import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ana C. Martins - Psicóloga",
  description: "Apoio emocional e desenvolvimento pessoal para uma vida mais equilibrada"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="body">{children}</body>
    </html>
  );
}
