import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Capabilities } from '@/components/Capabilities';
import { About } from '@/components/About';
import { Work } from '@/components/Work';
import { Stack } from '@/components/Stack';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-accent selection:text-white">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <Hero />
        <Capabilities />
        <About />
        <Work />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

