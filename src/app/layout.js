import "./globals.css";

export const metadata = {
  title: "ASFAR MUHAMMED NS | Full Stack Developer",
  description:
    "Asfar is a software developer building modern, scalable web applications with clean design and high performance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
