'use client';

import { useState } from 'react';
import Link from 'next/link';

const P = '#7c3aed';
const PLight = '#f5f3ff';

const developments = [
  {
    id: 1,
    name: 'Thornfield Manor',
    location: 'Eglinton, Co. Derry',
    image: 'https://images.unsplash.com/photo-1621983209348-7b5a63f23866?auto=format&fit=crop&w=800&q=80',
    status: 'Selling Now',
    statusColor: '#22c55e',
    units: '14 homes',
    type: '3 & 4-Bed Detached',
    priceFrom: '£265,000',
    desc: 'An exclusive development of 14 detached family homes in the sought-after village of Eglinton. Each home is finished to an exceptional standard with A-rated energy efficiency and generous landscaped gardens.',
    features: ['A-rated energy efficiency', 'Underfloor heating', 'Quartz worktops as standard', 'Landscaped gardens', 'Garage included', '10-year NHBC warranty'],
    available: 6,
  },
  {
    id: 2,
    name: 'Waterside Quarter',
    location: 'Waterside, Derry',
    image: 'https://images.unsplash.com/photo-1757862351841-c6f7ac0b0201?auto=format&fit=crop&w=800&q=80',
    status: 'Coming Soon',
    statusColor: '#f59e0b',
    units: '28 apartments',
    type: '1, 2 & 3-Bed Apartments',
    priceFrom: 'From £145,000',
    desc: 'A landmark riverside development bringing 28 contemporary apartments to the heart of Derry\'s Waterside. With river views, secure parking and a concierge, this is city living at its finest.',
    features: ['River views from upper floors', 'Concierge service', 'Secure underground parking', 'Rooftop terrace', 'EV charging points', 'Fibre broadband ready'],
    available: null,
  },
  {
    id: 3,
    name: 'Atlantic View',
    location: 'Portstewart, Co. Antrim',
    image: 'https://images.unsplash.com/photo-1580841835291-725127daf42a?auto=format&fit=crop&w=800&q=80',
    status: 'Last Few Remaining',
    statusColor: '#ef4444',
    units: '8 homes',
    type: '4-Bed Detached',
    priceFrom: '£320,000',
    desc: 'The final phase of this stunning coastal development on the edge of Portstewart. Just eight homes remain, each with elevated sea views and direct access to the coastal path.',
    features: ['Sea views', 'Coastal path access', 'Double garage', 'Oil & solar heating', 'Premium kitchen as standard', 'NHBC warranty'],
    available: 2,
  },
];

export default function NewHomesPage() {
  return (
    <div>
      {/* Page Header */}
      <div style={{ background: '#0f172a', padding: '64px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '360px', height: '360px', borderRadius: '50%', background: 'rgba(124,58,237,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', gap: '8px', fontSize: '13px', marginBottom: '20px' }}>
            <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#64748b' }}>/</span>
            <span style={{ color: '#94a3b8' }}>New Homes</span>
          </div>
          <p style={{ color: '#a78bfa', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 12px' }}>New Developments</p>
          <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#ffffff', margin: '0 0 12px', letterSpacing: '-0.025em' }}>New build homes across the North West</h1>
          <p style={{ color: '#94a3b8', fontSize: '17px', margin: 0, maxWidth: '540px', lineHeight: 1.65 }}>
            Exclusive new developments from trusted builders. Get first access before they go to open market.
          </p>
        </div>
      </div>

      {/* Why buy new */}
      <div style={{ background: '#f8f8fa', borderBottom: '1px solid #e4e4e7', padding: '20px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '40px', alignItems: 'center' }}>
          {[
            { icon: '✓', label: 'No chain — move in faster' },
            { icon: '✓', label: 'A-rated energy efficiency' },
            { icon: '✓', label: '10-year NHBC warranty' },
            { icon: '✓', label: 'Part-exchange considered' },
          ].map((b) => (
            <div key={b.label} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: P, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '10px', fontWeight: 700, color: '#fff' }}>{b.icon}</span>
              <span style={{ fontSize: '13px', color: '#374151', fontWeight: 500 }}>{b.label}</span>
            </div>
          ))}
          <div style={{ flex: 1 }} />
          <Link href="/contact?enquiry=New+Homes" style={{ background: P, color: '#fff', padding: '9px 20px', borderRadius: '7px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
            Register Interest
          </Link>
        </div>
      </div>

      {/* Developments */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '48px 24px 80px' }}>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '32px', fontWeight: 500 }}>
          <span style={{ color: '#0f172a', fontWeight: 700 }}>{developments.length}</span> active developments
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {developments.map((dev) => (
            <DevelopmentCard key={dev.id} dev={dev} />
          ))}
        </div>

        {/* Register interest banner */}
        <div className="register-cta-grid" style={{ marginTop: '72px', background: '#0f172a', borderRadius: '20px', padding: '56px 48px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '-60px', right: '120px', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(124,58,237,0.12)', pointerEvents: 'none' }} />
          <div style={{ position: 'relative' }}>
            <p style={{ color: '#a78bfa', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 10px' }}>Be first in line</p>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#ffffff', margin: '0 0 10px', letterSpacing: '-0.02em' }}>Get priority access to new releases</h2>
            <p style={{ color: '#94a3b8', fontSize: '15px', margin: 0, lineHeight: 1.65, maxWidth: '480px' }}>
              Register once and we&apos;ll contact you directly when new phases or developments launch — before they&apos;re listed publicly.
            </p>
          </div>
          <div style={{ position: 'relative' }}>
            <Link
              href="/contact?enquiry=New+Homes"
              style={{ display: 'block', background: P, color: '#ffffff', padding: '14px 32px', borderRadius: '10px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap', letterSpacing: '-0.01em' }}
            >
              Register Interest →
            </Link>
          </div>
        </div>

        {/* Buying new section */}
        <div style={{ marginTop: '72px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: P, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 10px' }}>Buying New</p>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: '0 0 10px' }}>Why choose a new build?</h2>
            <p style={{ fontSize: '15px', color: '#6b7280', margin: 0, maxWidth: '460px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.65 }}>
              New builds come with benefits that older homes simply can&apos;t match.
            </p>
          </div>
          <div className="why-buy-grid">
            {[
              {
                title: 'Energy Efficient',
                desc: 'New homes meet the latest building regulations and are typically A or B rated — meaning significantly lower heating and electricity bills.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                ),
              },
              {
                title: 'No Chain',
                desc: 'You buy directly from the developer. No waiting on someone else\'s sale to go through — your timeline is in your hands.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
                  </svg>
                ),
              },
              {
                title: 'Warranty Protected',
                desc: 'All new builds come with a 10-year NHBC Buildmark warranty, giving you peace of mind from day one.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} style={{ background: '#f8f8fa', borderRadius: '16px', padding: '32px', border: '1.5px solid #f0f0f2' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: PLight, display: 'flex', alignItems: 'center', justifyContent: 'center', color: P, marginBottom: '18px' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function DevelopmentCard({ dev }: { dev: typeof developments[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1.5px solid ${hovered ? '#ddd6fe' : '#e4e4e7'}`,
        borderRadius: '16px',
        overflow: 'hidden',
        background: '#ffffff',
        boxShadow: hovered ? '0 8px 28px rgba(124,58,237,0.08)' : '0 1px 4px rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.2s, border-color 0.2s',
      }}
      className="dev-card-grid"
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <img
          src={dev.image}
          alt={dev.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '280px', transition: 'transform 0.4s ease', transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
        />
        <div style={{ position: 'absolute', top: '12px', left: '12px', background: dev.statusColor, color: '#fff', padding: '4px 12px', borderRadius: '5px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.05em' }}>
          {dev.status}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '32px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
            <div>
              <h2 style={{ margin: 0, fontSize: '22px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>{dev.name}</h2>
              <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#9ca3af' }}>{dev.location}</p>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0, paddingLeft: '16px' }}>
              <p style={{ margin: 0, fontSize: '20px', fontWeight: 800, color: P, letterSpacing: '-0.02em' }}>{dev.priceFrom}</p>
              <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#9ca3af' }}>{dev.type}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', margin: '14px 0' }}>
            <span style={{ background: '#f4f4f5', color: '#6b7280', padding: '3px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>{dev.units}</span>
            {dev.available !== null && (
              <span style={{ background: '#dcfce7', color: '#16a34a', padding: '3px 10px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>{dev.available} remaining</span>
            )}
          </div>

          <p style={{ fontSize: '14px', color: '#374151', lineHeight: 1.65, margin: '0 0 20px' }}>{dev.desc}</p>

          <div className="dev-features-grid">
            {dev.features.map((f) => (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: P, flexShrink: 0 }} />
                <span style={{ fontSize: '13px', color: '#6b7280' }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
          <Link
            href="/contact?enquiry=New+Homes"
            style={{ background: P, color: '#ffffff', padding: '10px 22px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', letterSpacing: '-0.01em' }}
          >
            Register Interest
          </Link>
          <Link
            href="/contact?enquiry=New+Homes"
            style={{ border: `1.5px solid #e4e4e7`, color: '#374151', padding: '10px 22px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}
          >
            Request Brochure
          </Link>
        </div>
      </div>
    </div>
  );
}
