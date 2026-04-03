'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav style={{
      background: '#ffffff',
      borderBottom: '1px solid #e4e4e7',
      position: 'sticky', top: '38px', zIndex: 100,
      boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.07)' : 'none',
      transition: 'box-shadow 0.2s',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px', position: 'relative' }}>
        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'baseline', gap: '2px' }}>
          <span style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>Gateway</span>
          <span style={{ fontSize: '20px', fontWeight: 800, color: '#7c3aed', letterSpacing: '-0.02em' }}>Homes</span>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#9ca3af', marginLeft: '4px', letterSpacing: '0.04em' }}>NI</span>
        </Link>

        {/* Nav Links */}
        <div className={`nav-links-gh${menuOpen ? ' open' : ''}`}>
          <Link href="/properties?status=sale" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: 500 }}>
            Buy
          </Link>
          <Link href="/rent" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: 500 }}>
            Rent
          </Link>
          <Link href="/contact?enquiry=Selling" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: 500 }}>
            Sell
          </Link>
          <Link href="/new-homes" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: 500 }}>
            New Homes
          </Link>
          <Link href="/contact" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px', fontWeight: 500 }}>
            About
          </Link>
          <Link
            href="/contact?enquiry=Valuation"
            style={{
              textDecoration: 'none',
              background: '#7c3aed',
              color: '#ffffff',
              padding: '9px 20px',
              borderRadius: '7px',
              fontSize: '14px',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              letterSpacing: '-0.01em',
            }}
          >
            Free Valuation
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="nav-hamburger-gh"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
}
