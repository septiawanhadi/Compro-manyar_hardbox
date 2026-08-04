import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Produk & Layanan', href: '#services' },
    { name: 'Keunggulan', href: '#why-us' },
    { name: 'Alur Produksi', href: '#process' },
    { name: 'Katalog', href: '#portfolio' },
    { name: 'Tentang Kami', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
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
            <img
              src="/logo.png"
              alt="Manyar Hardbox Logo"
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
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
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full bg-muted/80 flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
              aria-label="Buka Menu Navigasi"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay: Backdrop */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Dark backdrop — klik untuk tutup */}
        <div
          className="absolute inset-0 bg-foreground/40 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* Slide-in Drawer dari kanan */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-background border-l border-border shadow-soft-lg flex flex-col transition-transform duration-300 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-border">
            <img
              src="/logo.png"
              alt="Manyar Hardbox Logo"
              className="h-10 w-auto object-contain"
            />
            <button
              onClick={closeMenu}
              className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-foreground hover:bg-primary/20 transition-colors"
              aria-label="Tutup Menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-4 py-3 text-base font-bold text-foreground hover:text-primary hover:bg-primary/10 rounded-2xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA di bagian bawah drawer */}
          <div className="px-6 pb-8">
            <a href="#inquiry" onClick={closeMenu}>
              <Button variant="primary" size="md" className="w-full">
                Mulai Pesanan Custom
              </Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
