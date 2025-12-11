'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'The Speakeasy' },
    { href: '/family', label: 'Meet The Family' },
    { href: '/business', label: 'Our Business' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 texture-wood border-b-2 border-[color:var(--color-gold)]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="text-3xl">🐊</div>
            <div className="flex flex-col">
              <span className="text-2xl text-[color:var(--color-gold)] tracking-wider group-hover:text-[color:var(--color-gold-light)] transition-colors" style={{ fontFamily: 'var(--font-decorative)' }}>
                The Swamp
              </span>
              <span className="text-xs text-[color:var(--color-cream)] uppercase tracking-widest -mt-1" style={{ fontFamily: 'var(--font-body)' }}>
                Family
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  text-sm uppercase tracking-wider transition-all duration-300
                  relative py-2 group
                  ${pathname === item.href
                    ? 'text-[color:var(--color-gold)]'
                    : 'text-[color:var(--color-cream)] hover:text-[color:var(--color-gold-light)]'
                  }
                `}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {item.label}
                <span className={`
                  absolute bottom-0 left-0 w-full h-0.5 bg-[color:var(--color-gold)] transform origin-left transition-transform duration-300
                  ${pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                `} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[color:var(--color-gold)] hover:text-[color:var(--color-gold-light)] transition-colors p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[color:var(--color-swamp-green-dark)]">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    text-sm uppercase tracking-wider transition-colors py-2
                    ${pathname === item.href
                      ? 'text-[color:var(--color-gold)]'
                      : 'text-[color:var(--color-cream)] hover:text-[color:var(--color-gold-light)]'
                    }
                  `}
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
