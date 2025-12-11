'use client';

import Link from 'next/link';
import { Navigation } from '@/components/navigation';
import { Button } from '@/components/ui/button';
import { ArrowRight, Target, Users, DollarSign } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [profitCounter, setProfitCounter] = useState(0);

  useEffect(() => {
    setMounted(true);

    // Animated profit counter
    const targetProfit = 415000;
    const duration = 2000;
    const steps = 50;
    const increment = targetProfit / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetProfit) {
        setProfitCounter(targetProfit);
        clearInterval(timer);
      } else {
        setProfitCounter(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navigation />

      <div className="min-h-screen">
        {/* Hero Section - The Swamp Speakeasy */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background with atmospheric layers */}
          <div className="absolute inset-0 bg-gradient-to-b from-color-shadow via-color-mahogany-dark to-color-shadow">
            {/* Animated fog effect */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-t from-transparent via-color-swamp-green-dark/20 to-transparent animate-pulse"
                   style={{ animationDuration: '8s' }} />
            </div>

            {/* Vintage texture overlay */}
            <div className="absolute inset-0 texture-wood opacity-40" />

            {/* Spotlight effect */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-color-gold opacity-5 blur-3xl" />
          </div>

          <div className="container relative z-10 px-4 py-32 mt-20">
            <div className="max-w-5xl mx-auto text-center space-y-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-color-mahogany/80 border-2 border-gold px-6 py-3 rounded shadow-vintage-md">
                <span className="text-3xl">🏛️</span>
                <span className="font-decorative text-gold text-lg tracking-wider">
                  EST. 1920
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="font-heading text-7xl lg:text-8xl font-black text-gold tracking-wider drop-shadow-2xl animate-fade-in">
                  WELCOME TO
                  <br />
                  <span className="text-cream block mt-4">THE SWAMP</span>
                  <span className="text-5xl lg:text-6xl text-gold-light block mt-2">FAMILY</span>
                </h1>

                <p className="font-decorative text-2xl lg:text-3xl text-cream-dark tracking-wide max-w-3xl mx-auto">
                  Where Fairy Tales Meet The Underworld
                </p>

                <div className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
              </div>

              {/* Tagline */}
              <p className="text-xl lg:text-2xl text-cream max-w-2xl mx-auto leading-relaxed">
                You thought you knew the story? Think again.
                <br />
                <span className="text-gold-light italic">
                  This is where the real power lies.
                </span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                <Link href="/family">
                  <Button
                    size="lg"
                    className="group bg-gradient-to-r from-color-swamp-green to-color-swamp-green-light hover:from-color-swamp-green-light hover:to-color-swamp-green text-cream font-bold text-lg px-10 py-6 shadow-vintage-lg border-2 border-gold hover:shadow-gold-glow transition-all duration-300"
                  >
                    MEET THE FAMILY
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>

                <Link href="/business">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-color-mahogany/60 text-gold border-2 border-gold hover:bg-color-mahogany hover:text-gold-light font-bold text-lg px-10 py-6 shadow-vintage-md hover:shadow-vintage-lg transition-all duration-300"
                  >
                    VIEW OUR OPERATIONS
                  </Button>
                </Link>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
                <div className="bg-color-mahogany-dark/80 backdrop-blur border-2 border-swamp-green-dark rounded p-6 shadow-vintage-md hover:shadow-vintage-lg transition-all duration-300 hover:-translate-y-1">
                  <Target className="w-8 h-8 text-gold mx-auto mb-3" />
                  <div className="font-heading text-4xl text-gold mb-2">4</div>
                  <div className="font-body text-sm text-cream uppercase tracking-widest">
                    Territories Controlled
                  </div>
                </div>

                <div className="bg-color-mahogany-dark/80 backdrop-blur border-2 border-swamp-green-dark rounded p-6 shadow-vintage-md hover:shadow-vintage-lg transition-all duration-300 hover:-translate-y-1">
                  <Users className="w-8 h-8 text-gold mx-auto mb-3" />
                  <div className="font-heading text-4xl text-gold mb-2">47</div>
                  <div className="font-body text-sm text-cream uppercase tracking-widest">
                    Made Members
                  </div>
                </div>

                <div className="bg-color-mahogany-dark/80 backdrop-blur border-2 border-swamp-green-dark rounded p-6 shadow-vintage-md hover:shadow-vintage-lg transition-all duration-300 hover:-translate-y-1">
                  <DollarSign className="w-8 h-8 text-gold mx-auto mb-3" />
                  <div className="font-heading text-4xl text-gold mb-2">
                    ${mounted ? profitCounter.toLocaleString() : '0'}
                  </div>
                  <div className="font-body text-sm text-cream uppercase tracking-widest">
                    Weekly Income
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-color-shadow to-transparent" />
        </section>

        {/* Featured Quote Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-color-mahogany-dark" />
          <div className="absolute inset-0 texture-wood opacity-30" />

          <div className="container relative z-10 px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="text-8xl lg:text-9xl text-gold-dark/30 font-decorative">"</div>
              <blockquote className="font-heading text-3xl lg:text-4xl text-cream italic leading-relaxed -mt-16">
                This is MY swamp... and everything else too.
              </blockquote>
              <div className="flex items-center justify-center gap-4 pt-4">
                <div className="h-px w-16 bg-gold" />
                <cite className="font-body text-gold text-lg not-italic tracking-wider">
                  Don Shrek Ogre
                </cite>
                <div className="h-px w-16 bg-gold" />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-color-shadow via-color-swamp-green-dark/20 to-color-shadow" />

          <div className="container relative z-10 px-4">
            <div className="max-w-3xl mx-auto text-center space-y-10">
              <h2 className="font-heading text-5xl lg:text-6xl text-gold">
                Ready to Join the Family?
              </h2>

              <p className="text-xl text-cream-dark leading-relaxed">
                We're always looking for talented individuals who understand the value of loyalty,
                respect, and knowing how to keep their mouth shut.
              </p>

              <div className="pt-6">
                <Link href="/family">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-color-gold to-color-gold-light hover:from-color-gold-light hover:to-color-gold text-shadow font-bold text-xl px-12 py-8 shadow-gold-glow hover:scale-105 transition-all duration-300"
                  >
                    ENTER THE SPEAKEASY
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
              </div>

              <p className="text-sm text-cream-dark/60 italic pt-8">
                * No cops, no snitches, no fairy godmothers
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
