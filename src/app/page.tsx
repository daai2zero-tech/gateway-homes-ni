'use client';

import { useState } from 'react';
import Link from 'next/link';
import { properties } from '@/data/properties';

function formatPrice(price: number, status: string) {
  if (status === 'Let') return `£${price.toLocaleString()} PCM`;
  return `£${price.toLocaleString()}`;
}

const quickFilterAreas = ['Derry City', 'Limavady', 'North Coast', 'Strabane', 'Eglinton'];

const P = '#7c3aed';
const PLight = '#f5f3ff';

export default function HomePage() {
  const [activeArea, setActiveArea] = useState<string | null>(null);
  const featured = properties.slice(0, 6);

  return (
    <>
      {/* ── HERO ── */}
      <section style={{ background: '#ffffff', minHeight: '82vh', display: 'grid', gridTemplateColumns: '55% 45%', overflow: 'hidden' }}>
        {/* Left: copy + search */}
        <div style={{ padding: '72px 48px 72px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '680px', marginLeft: 'auto' }}>
          {/* Pill */}
          <div style={{ display: 'inline-flex', alignSelf: 'flex-start', alignItems: 'center', gap: '7px', background: PLight, borderRadius: '100px', padding: '5px 14px', marginBottom: '28px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: P, display: 'block' }} />
            <span style={{ fontSize: '12px', fontWeight: 700, color: P, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Derry&apos;s Local Property Experts</span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 800, color: '#0f172a', lineHeight: 1.1, letterSpacing: '-0.025em', marginBottom: '18px' }}>
            Find your perfect home<br />in the North West
          </h1>
          <p style={{ fontSize: '17px', color: '#6b7280', marginBottom: '36px', lineHeight: 1.65, maxWidth: '480px' }}>
            Sales and lettings across Derry/Londonderry, Strabane, Limavady and the North Coast. Local experts, honest advice.
          </p>

          {/* Search Form */}
          <div style={{ background: '#ffffff', borderRadius: '14px', padding: '20px 24px', boxShadow: '0 4px 32px rgba(0,0,0,0.10)', border: '1px solid #f0f0f2', display: 'flex', gap: '12px', alignItems: 'flex-end', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 150px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Location</label>
              <select style={{ border: '1.5px solid #e4e4e7', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', color: '#0f172a', background: '#fff', outline: 'none', fontFamily: 'inherit' }}>
                <option>All Areas</option>
                <option>Derry City</option>
                <option>Eglinton</option>
                <option>North Coast</option>
                <option>Strabane</option>
                <option>Limavady</option>
              </select>
            </div>
            <div style={{ flex: '1 1 120px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Type</label>
              <select style={{ border: '1.5px solid #e4e4e7', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', color: '#0f172a', background: '#fff', outline: 'none', fontFamily: 'inherit' }}>
                <option>Buy or Rent</option>
                <option>For Sale</option>
                <option>To Let</option>
              </select>
            </div>
            <div style={{ flex: '1 1 120px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label style={{ fontSize: '11px', fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '0.07em' }}>Bedrooms</label>
              <select style={{ border: '1.5px solid #e4e4e7', borderRadius: '8px', padding: '10px 12px', fontSize: '14px', color: '#0f172a', background: '#fff', outline: 'none', fontFamily: 'inherit' }}>
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </div>
            <div>
              <Link href="/properties" style={{ display: 'block', background: P, color: '#ffffff', padding: '11px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap', letterSpacing: '-0.01em' }}>
                Search
              </Link>
            </div>
          </div>

          {/* Quick Filter Pills */}
          <div style={{ display: 'flex', gap: '8px', marginTop: '18px', flexWrap: 'wrap' }}>
            {quickFilterAreas.map((area) => (
              <button
                key={area}
                onClick={() => setActiveArea(activeArea === area ? null : area)}
                style={{
                  padding: '6px 14px', borderRadius: '20px',
                  border: `1.5px solid ${activeArea === area ? P : '#e4e4e7'}`,
                  background: activeArea === area ? PLight : '#ffffff',
                  color: activeArea === area ? P : '#6b7280',
                  fontSize: '13px', fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
                }}
              >
                {area}
              </button>
            ))}
          </div>
        </div>

        {/* Right: property photo */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img
            src="https://images.unsplash.com/photo-1621983209348-7b5a63f23866?auto=format&fit=crop&w=900&q=85"
            alt="Executive home in Eglinton"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(255,255,255,0.08) 0%, transparent 40%)' }} />

          {/* Floating stat card */}
          <div style={{
            position: 'absolute', bottom: '40px', left: '32px',
            background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)',
            borderRadius: '14px', padding: '18px 24px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.14)',
          }}>
            <p style={{ margin: 0, fontSize: '26px', fontWeight: 800, color: P, letterSpacing: '-0.02em' }}>320+</p>
            <p style={{ margin: '2px 0 0', fontSize: '13px', color: '#6b7280', fontWeight: 500 }}>Properties Available</p>
          </div>

          {/* Badge top right */}
          <div style={{
            position: 'absolute', top: '28px', right: '28px',
            background: '#ffffff', borderRadius: '10px', padding: '10px 16px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          }}>
            <p style={{ margin: 0, fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>97% Asking Price</p>
            <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#9ca3af' }}>Average achieved</p>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: '#0f172a', padding: '32px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {[
            { value: '320+', label: 'Properties Listed' },
            { value: '97%', label: 'Asking Price Achieved' },
            { value: '21 Days', label: 'Average Sale Time' },
            { value: '4.9★', label: 'Google Rating' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: '28px', fontWeight: 800, color: '#a78bfa', margin: 0, letterSpacing: '-0.02em' }}>{stat.value}</p>
              <p style={{ fontSize: '13px', color: '#94a3b8', margin: '4px 0 0', fontWeight: 500 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROPERTIES ── */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '40px' }}>
            <div>
              <p style={{ fontSize: '12px', fontWeight: 700, color: P, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 8px' }}>On the Market</p>
              <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>Featured Properties</h2>
            </div>
            <Link href="/properties" style={{ color: P, fontWeight: 600, fontSize: '14px', textDecoration: 'none' }}>View all →</Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {featured.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <Link href="/properties" style={{ display: 'inline-block', background: PLight, color: P, fontWeight: 700, fontSize: '15px', textDecoration: 'none', padding: '13px 32px', borderRadius: '8px' }}>
              View all properties →
            </Link>
          </div>
        </div>
      </section>

      {/* ── AREA GUIDES ── */}
      <section style={{ background: '#f8f8fa', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: P, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 8px' }}>Explore</p>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', margin: '0 0 8px', letterSpacing: '-0.02em' }}>Browse by Area</h2>
            <p style={{ color: '#6b7280', fontSize: '15px', margin: 0 }}>Discover properties across the North West by region</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {[
              {
                name: 'Derry City',
                count: 42,
                image: 'https://images.unsplash.com/photo-1768225325239-bcbb4446a544?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'North Coast',
                count: 18,
                image: 'https://images.unsplash.com/photo-1580841835291-725127daf42a?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'Strabane & Lifford',
                count: 24,
                image: 'https://images.unsplash.com/photo-1688242688499-4532cdebfe91?auto=format&fit=crop&w=600&q=80',
              },
              {
                name: 'Limavady',
                count: 15,
                image: 'https://images.unsplash.com/photo-1621983209348-7b5a63f23866?auto=format&fit=crop&w=600&q=80',
              },
            ].map((area) => (
              <AreaCard key={area.name} {...area} />
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUATION CTA ── */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 8px 48px rgba(0,0,0,0.12)' }}>
            {/* Left */}
            <div style={{ background: '#0f172a', padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(124,58,237,0.12)', pointerEvents: 'none' }} />
              <p style={{ color: '#a78bfa', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '16px' }}>
                Free Valuation
              </p>
              <h2 style={{ color: '#ffffff', fontSize: '32px', fontWeight: 800, lineHeight: 1.2, marginBottom: '20px', letterSpacing: '-0.02em' }}>
                Thinking of selling?<br />Get a free valuation
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: 1.65, marginBottom: '36px' }}>
                Our local experts will give you an honest, accurate assessment of your property&apos;s market value — with no obligation and no pressure.
              </p>
              <Link
                href="/contact?enquiry=Valuation"
                style={{ display: 'inline-block', background: P, color: '#ffffff', padding: '14px 30px', borderRadius: '9px', fontSize: '15px', fontWeight: 700, textDecoration: 'none', alignSelf: 'flex-start', letterSpacing: '-0.01em' }}
              >
                Book Free Valuation
              </Link>
            </div>
            {/* Right */}
            <div style={{ background: '#ffffff', padding: '64px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#0f172a', marginBottom: '36px', letterSpacing: '-0.01em' }}>How it works</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {[
                  { num: '1', title: 'Book online in minutes', desc: 'Pick a time that suits you in under 2 minutes — no account needed.' },
                  { num: '2', title: 'We visit your home', desc: 'One of our local valuers comes to you. No cost, no pressure, no commitment.' },
                  { num: '3', title: 'Receive your valuation', desc: 'Get a detailed market appraisal with comparable sales data and expert insight.' },
                ].map((step) => (
                  <div key={step.num} style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>
                    <div style={{ background: PLight, color: P, width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 800, flexShrink: 0 }}>
                      {step.num}
                    </div>
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: '15px', color: '#0f172a' }}>{step.title}</p>
                      <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#6b7280', lineHeight: 1.55 }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY GATEWAY ── */}
      <section style={{ background: '#f8f8fa', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: P, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 10px' }}>Why Choose Us</p>
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>Your home is in safe hands</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              {
                title: 'Local Knowledge',
                desc: 'Born and based in Derry, our team knows every street, every neighbourhood, and every price range across the North West.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                ),
              },
              {
                title: 'No Hidden Fees',
                desc: 'We believe in complete transparency. Our fees are straightforward, our advice is honest, and there are no nasty surprises.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <polyline points="9 12 11 14 15 10"/>
                  </svg>
                ),
              },
              {
                title: 'Dedicated Support',
                desc: 'From your first viewing to the day you get your keys, you\'ll have a named negotiator with you every step of the way.',
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
              },
            ].map((item) => (
              <div key={item.title} style={{ background: '#ffffff', border: '1.5px solid #f0f0f2', borderRadius: '16px', padding: '36px 32px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: PLight, marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: P }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0f172a', marginBottom: '10px', letterSpacing: '-0.01em' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PropertyCard({ property }: { property: typeof properties[0] }) {
  const [hovered, setHovered] = useState(false);
  const P = '#7c3aed';

  return (
    <Link href={`/properties/${property.slug}`} style={{ textDecoration: 'none' }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: '#ffffff',
          border: `1.5px solid ${hovered ? '#ddd6fe' : '#e4e4e7'}`,
          borderRadius: '14px',
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'box-shadow 0.2s, transform 0.2s, border-color 0.2s',
          boxShadow: hovered ? '0 10px 36px rgba(124,58,237,0.13)' : '0 1px 4px rgba(0,0,0,0.06)',
          transform: hovered ? 'translateY(-4px)' : 'none',
        }}
      >
        {/* Property image */}
        <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
          <img
            src={property.image}
            alt={property.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease', transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.12) 0%, transparent 40%)' }} />
          {/* Badge */}
          <div style={{
            position: 'absolute', top: '12px', left: '12px',
            background: property.status === 'Sale' ? P : '#0f172a',
            color: '#ffffff', padding: '4px 11px', borderRadius: '5px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em'
          }}>
            {property.status === 'Sale' ? 'For Sale' : 'To Let'}
          </div>
          {/* Area tag */}
          <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', padding: '3px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 600, color: '#374151' }}>
            {property.area}
          </div>
        </div>

        {/* Details */}
        <div style={{ padding: '18px 20px 20px' }}>
          <p style={{ fontSize: '22px', fontWeight: 800, color: P, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
            {formatPrice(property.price, property.status)}
          </p>
          <p style={{ fontSize: '14px', fontWeight: 600, color: '#0f172a', margin: '0 0 3px', letterSpacing: '-0.01em' }}>{property.title}</p>
          <p style={{ fontSize: '13px', color: '#9ca3af', margin: '0 0 14px' }}>{property.address}</p>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: '0', borderTop: '1px solid #f0f0f2', paddingTop: '14px' }}>
            {[
              { val: property.beds, label: property.beds !== 1 ? 'Beds' : 'Bed' },
              { val: property.baths, label: property.baths !== 1 ? 'Baths' : 'Bath' },
              { val: property.receptions, label: property.receptions !== 1 ? 'Receps' : 'Recep' },
            ].map((s, i) => (
              <div key={s.label} style={{ flex: 1, textAlign: 'center', borderRight: i < 2 ? '1px solid #f0f0f2' : 'none' }}>
                <p style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>{s.val}</p>
                <p style={{ margin: '2px 0 0', fontSize: '11px', color: '#9ca3af', fontWeight: 500 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

function AreaCard({ name, count, image }: { name: string; count: number; image: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/properties?area=${encodeURIComponent(name)}`} style={{ textDecoration: 'none' }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ borderRadius: '14px', overflow: 'hidden', position: 'relative', height: '240px', cursor: 'pointer' }}
      >
        <img
          src={image}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.45s ease', transform: hovered ? 'scale(1.06)' : 'scale(1)' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.72) 30%, rgba(0,0,0,0.1) 70%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 18px' }}>
          <p style={{ color: '#ffffff', fontSize: '17px', fontWeight: 800, margin: '0 0 4px', letterSpacing: '-0.01em' }}>{name}</p>
          <p style={{ color: '#a78bfa', fontSize: '13px', fontWeight: 600, margin: 0 }}>{count} properties</p>
        </div>
      </div>
    </Link>
  );
}
