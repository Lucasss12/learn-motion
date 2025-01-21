import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400"], // Vous pouvez spécifier les poids que vous souhaitez utiliser
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} md:mx-auto mx-5 max-w-screen-md sm:my-24 my-16`}>
        {children}
      </body>
    </html>
  );
}