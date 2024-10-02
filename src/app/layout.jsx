import localFont from "next/font/local";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";

//Components
import Header from "@/components/Header";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${jetbrainsMono.variable}
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
        `}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}