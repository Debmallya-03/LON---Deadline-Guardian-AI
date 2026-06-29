import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

export const metadata = {
  title: "Deadline Guardian AI",
  description: "Predict missed deadlines before they happen and generate emergency rescue plans."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="noise" />
        {children}
      </body>
    </html>
  );
}


