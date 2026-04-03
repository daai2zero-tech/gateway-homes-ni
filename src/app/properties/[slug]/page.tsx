'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { properties } from '@/data/properties';
import { use } from 'react';

function formatPrice(price: number, status: string) {
  if (status === 'Let') return `£${price.toLocaleString()} PCM`;
  return `£${price.toLocaleString()}`;
}

const P = '#7c3aed';
const PLight = '#f5f3ff';

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export default function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const property = properties.find((p) => p.slug === slug);

  const [propertyPrice, setPropertyPrice] = useState(property ? property.price.toString() : '');
  const [deposit, setDeposit] = useState('');
  const [interestRate, setInterestRate] = useState('4.5');
  const [termYears, setTermYears] = useState('25');
  const [monthlyPayment, setMonthlyPayment] = useState<number | null>(null);
  const [demoClicked, setDemoClicked] = useState(false);

  useEffect(() => {
    const price = parseFloat(propertyPrice.replace(/,/g, '')) || 0;
    const dep = parseFloat(deposit.replace(/,/g, '')) || 0;
    const rate = parseFloat(interestRate) || 0;
    const years = parseInt(termYears) || 0;
    const principal = price - dep;
    if (principal <= 0 || rate <= 0 || years <= 0) { setMonthlyPayment(null); return; }
    const monthlyRate = rate / 100 / 12;
    const numPayments = years * 12;
    const payment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    setMonthlyPayment(Math.round(payment));
  }, [propertyPrice, deposit, interestRate, termYears]);

  if (!property) {
    return (
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#0f172a' }}>Property not found</h1>
        <Link href="/properties" style={{ color: P, fontWeight: 600 }}>← Back to listings</Link>
      </div>
    );
  }

  const similar = properties.filter((p) => p.slug !== property.slug).slice(0, 3);

  const inputStyle: React.CSSProperties = {
    width: '100%', border: '1.5px solid #e4e4e7', borderRadius: '8px',
    padding: '9px 12px', fontSize: '14px', color: '#0f172a',
    outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box',
  };

  return (
    <div>
      {/* Hero image strip */}
      <div style={{ position: 'relative', height: '480px', overflow: 'hidden' }}>
        <img src={property.image} alt={property.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)' }} />
        <div style={{ position: 'absolute', bottom: '32px', left: '0', right: '0', maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'inline-block', background: property.status === 'Sale' ? P : '#0f172a', color: '#fff', padding: '5px 12px', borderRadius: '5px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              {property.status === 'Sale' ? 'For Sale' : 'To Let'}
            </div>
            <h1 style={{ color: 'white', fontSize: '32px', fontWeight: 800, margin: '0 0 4px', letterSpacing: '-0.02em', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>{property.title}</h1>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px', margin: 0 }}>{property.address}</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderRadius: '12px', padding: '14px 20px', textAlign: 'right' }}>
            <p style={{ margin: 0, fontSize: '28px', fontWeight: 800, color: P, letterSpacing: '-0.02em' }}>{formatPrice(property.price, property.status)}</p>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      <div style={{ background: '#0f172a', padding: '10px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{ height: '70px', borderRadius: '6px', overflow: 'hidden', cursor: 'pointer', opacity: i === 0 ? 1 : 0.55 }}>
              <img src={property.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: `brightness(${0.75 + i * 0.08})` }} />
            </div>
          ))}
        </div>
      </div>

      {/* Breadcrumb */}
      <div style={{ background: '#f8f8fa', borderBottom: '1px solid #e4e4e7', padding: '12px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '13px', color: '#9ca3af' }}>
          <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</Link>
          <span>/</span>
          <Link href="/properties" style={{ color: '#9ca3af', textDecoration: 'none' }}>Properties</Link>
          <span>/</span>
          <span style={{ color: '#0f172a', fontWeight: 500 }}>{property.title}</span>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '48px', alignItems: 'start' }}>

          {/* LEFT */}
          <div>
            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1px', background: '#e4e4e7', borderRadius: '12px', overflow: 'hidden', marginBottom: '36px' }}>
              {[
                { val: property.beds, label: 'Bedrooms' },
                { val: property.baths, label: 'Bathrooms' },
                { val: property.receptions, label: 'Receptions' },
                { val: property.type, label: 'Type' },
                { val: property.area, label: 'Area' },
              ].map((s) => (
                <div key={s.label} style={{ background: '#fff', padding: '18px 16px', textAlign: 'center' }}>
                  <p style={{ margin: 0, fontSize: '18px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em' }}>{s.val}</p>
                  <p style={{ margin: '3px 0 0', fontSize: '11px', color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{s.label}</p>
                </div>
              ))}
            </div>

            {/* Description */}
            <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#0f172a', marginBottom: '14px', letterSpacing: '-0.01em' }}>About this property</h2>
            <p style={{ fontSize: '15px', color: '#374151', lineHeight: 1.75, marginBottom: '36px' }}>{property.description}</p>

            {/* Features */}
            <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.01em' }}>Key Features</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 36px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {property.features.map((feature) => (
                <li key={feature} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#374151' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: P, flexShrink: 0 }} />
                  {feature}
                </li>
              ))}
            </ul>

            {/* EPC */}
            <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#0f172a', marginBottom: '14px', letterSpacing: '-0.01em' }}>EPC Rating</h2>
            <div style={{ border: '1.5px solid #e4e4e7', borderRadius: '12px', padding: '24px', marginBottom: '28px', background: '#f8f8fa' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ background: '#22c55e', color: '#fff', padding: '8px 24px', borderRadius: '6px', fontWeight: 800, fontSize: '24px' }}>B</div>
                <div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: '15px', color: '#0f172a' }}>Energy Performance Certificate — Band B</p>
                  <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#9ca3af' }}>Full EPC available on request</p>
                </div>
              </div>
            </div>

            {/* Floorplan */}
            <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#0f172a', marginBottom: '14px', letterSpacing: '-0.01em' }}>Floorplan</h2>
            <div style={{ border: '2px dashed #ddd6fe', borderRadius: '12px', padding: '52px 24px', background: PLight, textAlign: 'center', marginBottom: '36px' }}>
              <p style={{ color: P, fontSize: '14px', margin: 0, fontWeight: 600 }}>Floorplan available — contact us to request a copy</p>
            </div>

            {/* Location */}
            <h2 style={{ fontSize: '19px', fontWeight: 700, color: '#0f172a', marginBottom: '14px', letterSpacing: '-0.01em' }}>Location</h2>
            <div style={{ border: '1.5px solid #e4e4e7', borderRadius: '12px', overflow: 'hidden', marginBottom: '8px', height: '260px', position: 'relative', background: '#f0f0f0' }}>
              <img
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c0b5?auto=format&fit=crop&w=900&q=80"
                alt="Map view"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', filter: 'saturate(0.7)' }}
              />
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ background: 'white', borderRadius: '12px', padding: '14px 20px', boxShadow: '0 4px 20px rgba(0,0,0,0.18)', textAlign: 'center' }}>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: '15px', color: '#0f172a' }}>{property.area}</p>
                  <p style={{ margin: '4px 0 0', fontSize: '13px', color: '#6b7280' }}>{property.address}</p>
                </div>
              </div>
            </div>
            <p style={{ fontSize: '12px', color: '#9ca3af', margin: '0 0 36px' }}>Approximate location shown for illustration purposes</p>
          </div>

          {/* RIGHT SIDEBAR */}
          <div style={{ position: 'sticky', top: '148px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Agent Card */}
            <div style={{ border: '1.5px solid #e4e4e7', borderRadius: '16px', padding: '24px', background: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <div style={{ width: '54px', height: '54px', borderRadius: '50%', background: `linear-gradient(135deg, ${P} 0%, #0f172a 100%)`, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#ffffff', fontSize: '18px', fontWeight: 800 }}>JM</span>
                </div>
                <div>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: '15px', color: '#0f172a' }}>John McLaughlin</p>
                  <p style={{ margin: 0, fontSize: '13px', color: '#9ca3af' }}>Sales Negotiator · Gateway Homes NI</p>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px', padding: '16px', background: '#f8f8fa', borderRadius: '10px' }}>
                <a href="tel:02871234567" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#374151', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>
                  028 7123 4567
                </a>
                <a href="mailto:john@gatewayhomesni.co.uk" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#374151', fontSize: '14px', textDecoration: 'none', fontWeight: 500 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={P} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  john@gatewayhomesni.co.uk
                </a>
              </div>

              <button
                onClick={() => setDemoClicked(true)}
                style={{ display: 'block', width: '100%', textAlign: 'center', background: demoClicked ? '#f4f4f5' : P, color: demoClicked ? '#9ca3af' : '#ffffff', padding: '13px', borderRadius: '9px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '-0.01em' }}
              >
                {demoClicked ? 'This is a Demo Site' : 'Request a Viewing'}
              </button>
            </div>

            {/* Mortgage Calculator */}
            <div style={{ border: '1.5px solid #e4e4e7', borderRadius: '16px', padding: '24px', background: '#ffffff' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 18px', letterSpacing: '-0.01em' }}>Mortgage Calculator</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  { label: 'Property Price (£)', val: propertyPrice, set: setPropertyPrice, type: 'text' },
                  { label: 'Deposit (£)', val: deposit, set: setDeposit, type: 'text', placeholder: 'e.g. 30,000' },
                  { label: 'Interest Rate (%)', val: interestRate, set: setInterestRate, type: 'number' },
                  { label: 'Term (years)', val: termYears, set: setTermYears, type: 'number' },
                ].map((f) => (
                  <div key={f.label}>
                    <label style={{ fontSize: '12px', fontWeight: 600, color: '#6b7280', display: 'block', marginBottom: '4px' }}>{f.label}</label>
                    <input type={f.type} value={f.val} onChange={(e) => f.set(e.target.value)} placeholder={f.placeholder} style={inputStyle} />
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '16px', background: PLight, borderRadius: '10px', padding: '18px', textAlign: 'center' }}>
                {monthlyPayment !== null ? (
                  <>
                    <p style={{ margin: 0, fontSize: '11px', color: P, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Est. Monthly Payment</p>
                    <p style={{ margin: '6px 0 0', fontSize: '30px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>£{monthlyPayment.toLocaleString()}</p>
                    <p style={{ margin: '4px 0 0', fontSize: '11px', color: '#9ca3af' }}>Illustration only. Seek independent advice.</p>
                  </>
                ) : (
                  <p style={{ margin: 0, fontSize: '13px', color: '#9ca3af' }}>Enter a deposit to calculate</p>
                )}
              </div>
            </div>

            {/* Quick contact */}
            <div style={{ border: `1.5px solid #ddd6fe`, borderRadius: '16px', padding: '20px 24px', background: PLight }}>
              <p style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>Have a question?</p>
              <p style={{ margin: '0 0 14px', fontSize: '13px', color: '#6b7280', lineHeight: 1.5 }}>Our team is available Mon–Sat. We&apos;ll typically respond within the hour.</p>
              <a href="tel:02871234567" style={{ display: 'block', textAlign: 'center', background: 'white', color: P, padding: '11px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', border: `1.5px solid #ddd6fe` }}>
                Call 028 7123 4567
              </a>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <div style={{ marginTop: '72px', borderTop: '1px solid #e4e4e7', paddingTop: '56px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 800, color: '#0f172a', marginBottom: '28px', letterSpacing: '-0.01em' }}>Similar Properties</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {similar.map((p) => (
              <Link key={p.id} href={`/properties/${p.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ border: '1.5px solid #e4e4e7', borderRadius: '14px', overflow: 'hidden', background: '#ffffff', transition: 'box-shadow 0.2s' }}>
                  <div style={{ height: '180px', position: 'relative', overflow: 'hidden' }}>
                    <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', top: '10px', left: '10px', background: p.status === 'Sale' ? P : '#0f172a', color: '#fff', padding: '3px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase' }}>
                      {p.status === 'Sale' ? 'For Sale' : 'To Let'}
                    </div>
                  </div>
                  <div style={{ padding: '16px 18px' }}>
                    <p style={{ margin: '0 0 3px', fontSize: '19px', fontWeight: 800, color: P, letterSpacing: '-0.02em' }}>{formatPrice(p.price, p.status)}</p>
                    <p style={{ margin: '0 0 4px', fontSize: '14px', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.01em' }}>{p.title}</p>
                    <p style={{ margin: '0 0 10px', fontSize: '12px', color: '#9ca3af' }}>{p.address}</p>
                    <div style={{ display: 'flex', gap: '14px', fontSize: '12px', color: '#6b7280', fontWeight: 500 }}>
                      <span>{p.beds} bed</span>
                      <span>{p.baths} bath</span>
                      <span>{p.receptions} rec</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
