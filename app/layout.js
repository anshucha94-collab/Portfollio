import { Manrope, Sora } from "next/font/google";
import Navbar from "@/components/navbar";
import "./globals.css";

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Sora({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anshu Chandola | Aspiring Full-Stack Developer",
  description: "Portfolio of Anshu Chandola, a Computer Science diploma student and aspiring full-stack developer from Uttarakhand, India.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col overflow-x-hidden text-neutral-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
