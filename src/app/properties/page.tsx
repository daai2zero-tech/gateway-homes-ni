'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { properties } from '@/data/properties';

function formatPrice(price: number, status: string) {
  if (status === 'Let') return `£${price.toLocaleString()} PCM`;
  return `£${price.toLocaleString()}`;
}

const P = '#7c3aed';

type SortOption = 'price-asc' | 'price-desc' | 'newest';

export default function PropertiesPage() {
  const [sortBy, setSortBy] = useState<SortOption>('price-asc');
  const [locationFilter, setLocationFilter] = useState('All Areas');
  const [statusFilter, setStatusFilter] = useState('All');
  const [bedsFilter, setBedsFilter] = useState('Any');

  const sorted = useMemo(() => {
    const copy = [...properties];
    if (sortBy === 'price-asc') copy.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') copy.sort((a, b) => b.price - a.price);
    return copy;
  }, [sortBy]);

  return (
    <>
      {/* Page Header */}
      <div style={{ background: '#f8f8fa', borderBottom: '1px solid #e4e4e7', padding: '40px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '8px', fontSize: '13px', color: '#9ca3af', marginBottom: '12px' }}>
            <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ color: '#0f172a', fontWeight: 500 }}>Properties</span>
          </div>
          <h1 style={{ fontSize: '34px', fontWeight: 800, color: '#0f172a', margin: '0 0 6px', letterSpacing: '-0.02em' }}>Properties</h1>
          <p style={{ color: '#6b7280', fontSize: '15px', margin: 0 }}>Sales and lettings across the North West</p>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div style={{ position: 'sticky', top: '106px', zIndex: 50, background: '#ffffff', borderBottom: '1px solid #e4e4e7', padding: '12px 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            style={{ border: '1.5px solid #e4e4e7', borderRadius: '7px', padding: '8px 12px', fontSize: '13px', color: '#0f172a', background: '#fff', outline: 'none', fontFamily: 'inherit' }}
          >
            <option>All Areas</option>
            <option>Derry City</option>
            <option>Eglinton</option>
            <option>North Coast</option>
            <option>Strabane</option>
            <option>Limavady</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            style={{ border: '1.5px solid #e4e4e7', borderRadius: '7px', padding: '8px 12px', fontSize: '13px', color: '#0f172a', background: '#fff', outline: 'none', fontFamily: 'inherit' }}
          >
            <option value="All">For Sale & To Let</option>
            <option value="Sale">For Sale</option>
            <option value="Let">To Let</option>
          </select>

          <select
            value={bedsFilter}
            onChange={(e) => setBedsFilter(e.target.value)}
            style={{ border: '1.5px solid #e4e4e7', borderRadius: '7px', padding: '8px 12px', fontSize: '13px', color: '#0f172a', background: '#fff', outline: 'none', fontFamily: 'inherit' }}
          >
            <option>Any</option>
            <option>1+</option>
            <option>2+</option>
            <option>3+</option>
            <option>4+</option>
          </select>

          <div style={{ flex: 1 }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <label style={{ fontSize: '13px', color: '#6b7280', fontWeight: 500, whiteSpace: 'nowrap' }}>Sort:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              style={{ border: '1.5px solid #e4e4e7', borderRadius: '7px', padding: '8px 12px', fontSize: '13px', color: '#0f172a', background: '#fff', outline: 'none', fontFamily: 'inherit' }}
            >
              <option value="price-asc">Price (Low–High)</option>
              <option value="price-desc">Price (High–Low)</option>
              <option value="newest">Newest</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '32px 24px 80px' }}>
        <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '28px', fontWeight: 500 }}>
          Showing <span style={{ color: '#0f172a', fontWeight: 700 }}>{sorted.length}</span> properties
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {sorted.map((property) => (
            <ListingCard key={property.id} property={property} />
          ))}
        </div>

        {/* Pagination */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '56px' }}>
          <button style={{ padding: '9px 18px', border: '1.5px solid #e4e4e7', borderRadius: '8px', background: '#fff', color: '#374151', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500 }}>
            ← Prev
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              style={{
                width: '38px', height: '38px',
                border: `1.5px solid ${page === 1 ? P : '#e4e4e7'}`,
                borderRadius: '8px',
                background: page === 1 ? P : '#fff',
                color: page === 1 ? '#ffffff' : '#374151',
                fontSize: '14px', fontWeight: page === 1 ? 700 : 400,
                cursor: 'pointer', fontFamily: 'inherit'
              }}
            >
              {page}
            </button>
          ))}
          <button style={{ padding: '9px 18px', border: '1.5px solid #e4e4e7', borderRadius: '8px', background: '#fff', color: '#374151', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: 500 }}>
            Next →
          </button>
        </div>
      </div>
    </>
  );
}

function ListingCard({ property }: { property: typeof properties[0] }) {
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
      {/* Property image */}
      <div style={{ position: 'relative', width: '240px', flexShrink: 0, overflow: 'hidden' }}>
        <img
          src={property.image}
          alt={property.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s ease', transform: hovered ? 'scale(1.04)' : 'scale(1)' }}
        />
        <div style={{
          position: 'absolute', top: '10px', left: '10px',
          background: property.status === 'Sale' ? P : '#0f172a',
          color: '#ffffff', padding: '4px 10px', borderRadius: '5px', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em'
        }}>
          {property.status === 'Sale' ? 'For Sale' : 'To Let'}
        </div>
      </div>

      {/* Details */}
      <div style={{ flex: 1, padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
            <h3 style={{ margin: 0, fontSize: '17px', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.01em' }}>{property.title}</h3>
            <p style={{ margin: 0, fontSize: '22px', fontWeight: 800, color: P, letterSpacing: '-0.02em', flexShrink: 0, paddingLeft: '16px' }}>
              {formatPrice(property.price, property.status)}
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
