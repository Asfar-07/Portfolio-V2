import "./globals.css";
import Header from "@/components/layouts/Header";
import HeroBg from "@/components/layouts/HeroBg";
import Footer from "@/components/layouts/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <HeroBg />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
