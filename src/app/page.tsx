import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Rating from "@/components/Rating";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen selection:bg-white selection:text-black">
      {/* Background Grain/Noise Effect - Optimized for Performance */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02] z-[100] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Rating />
      <Contact />

      <footer className="py-8 text-center text-gray-600 text-xs font-mono border-t border-white/5 bg-black">
        &copy; {new Date().getFullYear()} ZENVIC. ALL RIGHTS RESERVED. BEYOND THE VOID.
      </footer>
    </main>
  );
}
