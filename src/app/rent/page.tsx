'use client';

import { useState } from 'react';
import Link from 'next/link';
import { properties } from '@/data/properties';

const P = '#7c3aed';
const PLight = '#f5f3ff';

function formatPrice(price: number) {
  return `£${price.toLocaleString()} PCM`;
}

const letProperties = properties.filter((p) => p.status === 'Let');

export default function RentPage() {
  return (
    <div>
      {/* Page Header */}
      <div style={{ background: '#0f172a', padding: '64px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '360px', height: '360px', borderRadius: '50%', background: 'rgba(124,58,237,0.1)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', gap: '8px', fontSize: '13px', marginBottom: '20px' }}>
            <Link href="/" style={{ color: '#64748b', textDecoration: 'none' }}>Home</Link>
            <span style={{ color: '#64748b' }}>/</span>
            <span style={{ color: '#94a3b8' }}>Rent</span>
          </div>
          <p style={{ color: '#a78bfa', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 12px' }}>Properties to Let</p>
          <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#ffffff', margin: '0 0 12px', letterSpacing: '-0.025em' }}>Find your next rental</h1>
          <p style={{ color: '#94a3b8', fontSize: '17px', margin: 0, maxWidth: '520px', lineHeight: 1.65 }}>
            Quality rental properties across Derry and the North West. No hidden fees, no hassle — just honest lettings.
          </p>
        </div>
      </div>

      {/* Quick stats bar */}
      <div style={{ background: '#f8f8fa', borderBottom: '1px solid #e4e4e7', padding: '16px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '40px', alignItems: 'center' }}>
          {[
            { label: 'Available Now', value: `${letProperties.length} properties` },
            { label: 'Average Rent', value: '£825 PCM' },
            { label: 'Deposit', value: '5 weeks rent' },
            { label: 'Response Time', value: 'Same day' },
          ].map((s) => (
            <div key={s.label}>
              <p style={{ margin: 0, fontSize: '12px', color: '#9ca3af', fontWeight: 500 }}>{s.label}</p>
              <p style={{ margin: 0, fontSize: '14px', color: '#0f172a', fontWeight: 700 }}>{s.value}</p>
            </div>
          ))}
          <div style={{ flex: 1 }} />
          <Link href="/contact?enquiry=Renting" style={{ background: P, color: '#fff', padding: '9px 20px', borderRadius: '7px', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>
            Register for Alerts
          </Link>
        </div>
      </div>

      {/* Listings */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px' }}>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '24px', fontWeight: 500 }}>
          Showing <span style={{ color: '#0f172a', fontWeight: 700 }}>{letProperties.length}</span> properties to let
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '64px' }}>
          {letProperties.map((property) => (
            <LetCard key={property.id} property={property} />
          ))}
        </div>

        {/* Tenant info section */}
        <div style={{ borderTop: '1px solid #e4e4e7', paddingTop: '64px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: P, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 10px' }}>Renting with Us</p>
            <h2 style={{ fontSize: '30px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: '0 0 12px' }}>How it works</h2>
            <p style={{ fontSize: '15px', color: '#6b7280', margin: 0, maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.65 }}>
              We make renting straightforward. Here's what to expect from start to finish.
            </p>
          </div>

          <div className="rent-steps-grid">
            {[
              { step: '01', title: 'Register', desc: 'Tell us what you\'re looking for — area, size, budget — and we\'ll match you with suitable properties.' },
              { step: '02', title: 'View', desc: 'We arrange viewings at times that suit you. Our team knows every property inside out.' },
              { step: '03', title: 'Apply', desc: 'Simple referencing process. We use a trusted third-party provider and keep you updated throughout.' },
              { step: '04', title: 'Move In', desc: 'Keys in hand, inventory signed. We\'re here for the duration of your tenancy if you need us.' },
            ].map((s) => (
              <div key={s.step} style={{ background: '#f8f8fa', borderRadius: '16px', padding: '28px 24px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: PLight, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: P }}>{s.step}</span>
                </div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.01em' }}>{s.title}</h3>
                <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Costs breakdown */}
          <div className="rent-costs-grid">
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '20px', letterSpacing: '-0.01em' }}>Typical costs</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  { item: 'First month\'s rent', detail: 'Due on signing' },
                  { item: 'Security deposit', detail: '5 weeks rent (held in TDS)' },
                  { item: 'Referencing', detail: 'Included — no charge to tenant' },
                  { item: 'Admin fees', detail: 'None — we don\'t charge tenants' },
                  { item: 'Renewal fee', detail: 'None' },
                ].map((c, i) => (
                  <div key={c.item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: i < 4 ? '1px solid #f0f0f2' : 'none' }}>
                    <span style={{ fontSize: '14px', color: '#374151', fontWeight: 500 }}>{c.item}</span>
                    <span style={{ fontSize: '13px', color: '#6b7280' }}>{c.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ background: PLight, border: `1.5px solid #ddd6fe`, borderRadius: '16px', padding: '32px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.01em' }}>Can&apos;t find what you&apos;re looking for?</h3>
              <p style={{ fontSize: '14px', color: '#374151', marginBottom: '24px', lineHeight: 1.65 }}>
                Register your requirements and we&apos;ll contact you as soon as a matching property becomes available.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {[
                  'No obligation — unsubscribe any time',
                  'First to hear about new listings',
                  'Personalised property matches',
                ].map((f) => (
                  <div key={f} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: P, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <polyline points="2 6 5 9 10 3" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span style={{ fontSize: '13px', color: '#374151', fontWeight: 500 }}>{f}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact?enquiry=Renting"
                style={{ display: 'block', textAlign: 'center', background: P, color: '#fff', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', letterSpacing: '-0.01em' }}
              >
                Register for Alerts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LetCard({ property }: { property: typeof properties[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        border: `1.5px solid ${hovered ? '#ddd6fe' : '#e4e4e7'}`,
        borderRadius: '14px',
        overflow: 'hidden',
        background: '#ffffff',
        boxShadow: hovered ? '0 8px 28px rgba(124,58,237,0.10)' : '0 1px 4px rgba(0,0,0,0.05)',
        transition: 'box-shadow 0.2s, border-color 0.2s',
      }}
    >
      <div style={{ position: 'relative', width: '240px', flexShrink: 0, overflow: 'hidden' }}>
        <img
          src={property.image}
          alt={property.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease', transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
        />
        <div style={{ position: 'absolute', top: '10px', left: '10px', background: '#0f172a', color: '#ffffff', padding: '4px 10px', borderRadius: '5px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em' }}>
          To Let
        </div>
        <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: '#22c55e', color: '#ffffff', padding: '3px 8px', borderRadius: '4px', fontSize: '11px', fontWeight: 700 }}>
          Available Now
        </div>
      </div>

      <div style={{ flex: 1, padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
            <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.01em' }}>{property.title}</h3>
            <p style={{ margin: 0, fontSize: '22px', fontWeight: 800, color: P, letterSpacing: '-0.02em', flexShrink: 0, paddingLeft: '16px' }}>
              {formatPrice(property.price)}
            </p>
          </div>
          <p style={{ fontSize: '13px', color: '#9ca3af', margin: '0 0 12px' }}>{property.address}</p>
          <p style={{ fontSize: '14px', color: '#374151', margin: '0 0 16px', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {property.description}
          </p>
          <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: '#374151', fontWeight: 500 }}>
            <span>{property.beds} bed{property.beds !== 1 ? 's' : ''}</span>
            <span>{property.baths} bath{property.baths !== 1 ? 's' : ''}</span>
            <span>{property.receptions} rec</span>
            <span style={{ background: '#f5f3ff', color: P, padding: '2px 9px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>{property.type}</span>
            <span style={{ background: '#f4f4f5', color: '#6b7280', padding: '2px 9px', borderRadius: '4px', fontSize: '12px', fontWeight: 600 }}>{property.area}</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          <Link
            href={`/properties/${property.slug}`}
            style={{ background: P, color: '#ffffff', padding: '10px 22px', borderRadius: '8px', fontSize: '13px', fontWeight: 700, textDecoration: 'none', letterSpacing: '-0.01em' }}
          >
            View Property →
          </Link>
        </div>
      </div>
    </div>
  );
}
