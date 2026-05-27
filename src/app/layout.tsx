import { Exo, Manrope } from "next/font/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "aos/dist/aos.css";

import "@/public/assets/font-awesome/css/all.min.css";
import "@/public/assets/font-awesome/css/fontawesome.min.css";
import "@/public/assets/scss/style.scss";

import AOSLoader from "@/src/components/shared/AOSLoader";
import Header from "@/src/components/home/Header";
import Footer from "@/src/components/home/Footer";
import BootstrapClient from "./BootstrapClient";

const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Solar Company - Clean Energy Solutions",
  description: "Embrace the power of the sun with solar energy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${exo.variable} ${manrope.variable}`}>
        <BootstrapClient />
        <AOSLoader />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}