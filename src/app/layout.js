import "./globals.css";
import Header from "@/components/layouts/Header";
import HeroBg from "@/components/layouts/HeroBg";
import Footer from "@/components/layouts/Footer";

export const metadata = {
  title: "ASFAR MUHAMMED NS | Full Stack Developer",
  description:
    "Asfar is a software developer building modern, scalable web applications with clean design and high performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {/* <HeroBg /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
