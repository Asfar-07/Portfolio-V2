import CharacterMessage from "@/components/message/CharacterMessage";
import "./globals.css";


export const metadata = {
  title: "ASFAR MUHAMMED NS | Full Stack Developer",
  description:
    "Asfar is a software developer building modern, scalable web applications with clean design and high performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://www.asfarmuhammed.space" />
      </head>
      <body>
        <main>{children}</main>
        <CharacterMessage image="/images/RobotWell.webp" />
      </body>
    </html>
  );
}
