import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/home/Header";
import Footer from "@/components/home/Footer";
import { NextIntlClientProvider, useMessages } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Proficient in web development, problem-solving & networks ",
};

type Props = {
  children: React.ReactNode
  params: {
    locale: "en" | "es"
  }
}

const RootLayout: React.FC<Props> = ({
  children,
  params: {locale}
}) => {
  const messages = useMessages()
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
        {children}
        <Footer />
        </NextIntlClientProvider>
        </body>
    </html>
  );
}

export default RootLayout