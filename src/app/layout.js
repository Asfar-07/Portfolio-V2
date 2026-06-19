import { Outfit } from 'next/font/google'
import "./globals.css";

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], 
  display: 'swap',
  variable: '--font-outfit',        
})

export const metadata = {
  title: "ASFAR MUHAMMED NS | Full Stack Developer",
  description:
    "Asfar is a software developer building modern, scalable web applications with clean design and high performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.className}>
      <head>
        <link rel="preconnect" href="https://asfarmuhammedns.vercel.app" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
