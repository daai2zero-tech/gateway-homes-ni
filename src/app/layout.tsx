import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Gateway Homes NI — Derry Estate Agency',
  description: 'Find your next home in the North West. Residential sales, lettings, valuations and new developments across Derry, North Coast, Strabane and Donegal border.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Demo Banner */}
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999, background: '#7c3aed', color: '#ffffff', textAlign: 'center', padding: '8px', fontSize: '13px', fontWeight: 600, letterSpacing: '0.05em' }}>
          DEMO SITE — Built by Derry Digital | derrydigital.co.uk
        </div>
        <div style={{ height: '38px' }} />

        <Navigation />

        <main>
          {children}
        </main>

        {/* Footer */}
        <footer>
          {/* Top footer */}
          <div style={{ background: '#ffffff', borderTop: '1px solid #e4e4e7', padding: '48px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
              {/* Buy */}
              <div>
                <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b7280', marginBottom: '16px' }}>Buy</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li><Link href="/properties?status=sale" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px' }}>Properties for Sale</Link></li>
                  <li><Link href="/properties?area=Derry+City" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px' }}>Derry City</Link></li>
                  <li><Link href="/properties?area=North+Coast" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px' }}>North Coast</Link></li>
                  <li><Link href="/properties?area=Eglinton" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px' }}>Eglinton</Link></li>
                </ul>
              </div>
              {/* Rent */}
              <div>
                <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b7280', marginBottom: '16px' }}>Rent</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li><Link href="/properties?status=let" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px' }}>Properties to Let</Link></li>
                  <li><Link href="/properties?status=let&area=Derry+City" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px' }}>Derry City Rentals</Link></li>
                  <li><Link href="/contact?enquiry=Renting" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px' }}>Register for Alerts</Link></li>
                  <li><Link href="/contact?enquiry=Renting" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px' }}>Tenant Information</Link></li>
                </ul>
              </div>
              {/* Services */}
              <div>
                <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b7280', marginBottom: '16px' }}>Services</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <li><Link href="/contact?enquiry=Valuation" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px' }}>Free Valuation</Link></li>
                  <li><Link href="/contact?enquiry=Selling" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px' }}>Selling Your Home</Link></li>
                  <li><Link href="/contact?enquiry=General" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px' }}>New Developments</Link></li>
                  <li><Link href="/contact?enquiry=General" style={{ textDecoration: 'none', color: '#374151', fontSize: '14px' }}>Landlord Services</Link></li>
                </ul>
              </div>
              {/* Contact */}
              <div>
                <h4 style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#6b7280', marginBottom: '16px' }}>Contact</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#374151' }}>
                  <p style={{ margin: 0, fontWeight: 600 }}>Gateway Homes NI</p>
                  <p style={{ margin: 0 }}>12 Strand Road</p>
                  <p style={{ margin: 0 }}>Waterside, Derry</p>
                  <p style={{ margin: 0 }}>BT47 6NH</p>
                  <p style={{ margin: 0, marginTop: '8px' }}>
                    <a href="tel:02871234567" style={{ color: '#7c3aed', textDecoration: 'none' }}>028 7123 4567</a>
                  </p>
                  <p style={{ margin: 0 }}>
                    <a href="mailto:info@gatewayhomesni.co.uk" style={{ color: '#7c3aed', textDecoration: 'none' }}>info@gatewayhomesni.co.uk</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom footer */}
          <div style={{ background: '#0f172a', padding: '20px 0' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>
                © 2024 Gateway Homes NI. All rights reserved. Registered with PSRA.
              </p>
              <div style={{ display: 'flex', gap: '24px' }}>
                <Link href="/contact" style={{ color: '#94a3b8', fontSize: '13px', textDecoration: 'none' }}>Privacy Policy</Link>
                <Link href="/contact" style={{ color: '#94a3b8', fontSize: '13px', textDecoration: 'none' }}>Terms of Use</Link>
                <Link href="/contact" style={{ color: '#94a3b8', fontSize: '13px', textDecoration: 'none' }}>Cookie Policy</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
