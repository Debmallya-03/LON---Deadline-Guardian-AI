import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PageShell({ children, footer = true }) {
  return (
    <main className="min-h-screen bg-void bg-radial-grid text-white">
      <Navbar />
      {children}
      {footer && <Footer />}
    </main>
  );
}


