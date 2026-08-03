import React, { useState, useEffect } from 'react';
import { Package, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Perkenalan', href: '#hero' },
    { name: 'Produk & Layanan', href: '#services' },
    { name: 'Keunggulan', href: '#why-us' },
    { name: 'Alur Produksi', href: '#process' },
    { name: 'Katalog', href: '#portfolio' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className="sticky top-4 z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div
        className={`flex items-center justify-between px-6 py-3.5 rounded-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-md border border-border shadow-soft-lg'
            : 'bg-white/70 backdrop-blur-sm border border-border/60 shadow-soft'
        }`}
      >
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground transition-transform group-hover:scale-105">
            <Package className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl tracking-tight text-foreground leading-none">
              MANYAR HARDBOX
            </span>
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none mt-1">
              Custom Packaging
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a href="#inquiry" className="hidden sm:inline-block">
            <Button variant="primary" size="sm">
              Mulai Pesanan Custom
            </Button>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-muted/80 flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-6 bg-background/95 backdrop-blur-md rounded-[2rem] border border-border shadow-soft-lg flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 text-base font-bold text-foreground hover:text-primary hover:bg-primary/10 rounded-2xl transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#inquiry"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center"
          >
            <Button variant="primary" size="md" className="w-full">
              Mulai Pesanan Custom
            </Button>
          </a>
        </div>
      )}
    </header>
  );
};
