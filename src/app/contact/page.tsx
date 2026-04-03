'use client';

import { useState } from 'react';

const P = '#7c3aed';
const PLight = '#f5f3ff';

type FormState = { name: string; email: string; phone: string; enquiryType: string; message: string };
type FormErrors = Partial<FormState>;

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', enquiryType: 'General', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) { newErrors.email = 'Email is required'; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { newErrors.email = 'Please enter a valid email address'; }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  const inputStyle: React.CSSProperties = {
    width: '100%', border: '1.5px solid #e4e4e7', borderRadius: '8px',
    padding: '11px 13px', fontSize: '14px', color: '#0f172a',
    outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box',
  };

  return (
    <div>
      {/* Page Header */}
      <div style={{ background: '#0f172a', padding: '64px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(124,58,237,0.12)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <p style={{ color: '#a78bfa', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 12px' }}>Get in Touch</p>
          <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#ffffff', margin: '0 0 12px', letterSpacing: '-0.025em' }}>How can we help?</h1>
          <p style={{ color: '#94a3b8', fontSize: '17px', margin: 0, maxWidth: '520px', lineHeight: 1.65 }}>
            Whether you&apos;re buying, selling, renting or just looking for a free valuation — our Derry team is ready to help.
          </p>
        </div>
      </div>

      {/* Enquiry Type Quick Select */}
      <div style={{ background: '#f8f8fa', borderBottom: '1px solid #e4e4e7', padding: '20px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {['Buying', 'Renting', 'Selling', 'Valuation', 'New Homes', 'General'].map((type) => (
            <button
              key={type}
              onClick={() => setForm((f) => ({ ...f, enquiryType: type }))}
              style={{
                padding: '8px 18px', borderRadius: '20px',
                border: `1.5px solid ${form.enquiryType === type ? P : '#e4e4e7'}`,
                background: form.enquiryType === type ? PLight : '#fff',
                color: form.enquiryType === type ? P : '#6b7280',
                fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.15s',
              }}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '56px 24px 80px', gap: '64px' }} className="contact-main-grid">

        {/* FORM */}
        <div>
          {submitted ? (
            <div style={{ background: PLight, border: `1.5px solid #ddd6fe`, borderRadius: '16px', padding: '48px', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', background: P, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '22px', color: 'white', fontWeight: 800 }}>
                ✓
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#0f172a', margin: '0 0 10px', letterSpacing: '-0.01em' }}>Message sent!</h2>
              <p style={{ color: '#374151', fontSize: '16px', margin: '0 0 28px', lineHeight: 1.6 }}>
                Thanks {form.name} — we&apos;ll be in touch within one working day.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', enquiryType: 'General', message: '' }); }}
                style={{ background: P, color: '#fff', border: 'none', padding: '11px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <h2 style={{ fontSize: '22px', fontWeight: 700, color: '#0f172a', marginBottom: '32px', letterSpacing: '-0.01em' }}>Send us a message</h2>

              <div className="form-row-gh" style={{ gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>Full Name <span style={{ color: '#ef4444' }}>*</span></label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Jane Smith"
                    style={{ ...inputStyle, borderColor: errors.name ? '#ef4444' : '#e4e4e7' }} />
                  {errors.name && <p style={{ color: '#ef4444', fontSize: '12px', margin: '4px 0 0' }}>{errors.name}</p>}
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>Email Address <span style={{ color: '#ef4444' }}>*</span></label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="jane@example.com"
                    style={{ ...inputStyle, borderColor: errors.email ? '#ef4444' : '#e4e4e7' }} />
                  {errors.email && <p style={{ color: '#ef4444', fontSize: '12px', margin: '4px 0 0' }}>{errors.email}</p>}
                </div>
              </div>

              <div className="form-row-gh" style={{ gap: '20px', marginBottom: '20px' }}>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="07700 000000" style={inputStyle} />
                </div>
                <div>
                  <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>Enquiry Type</label>
                  <select name="enquiryType" value={form.enquiryType} onChange={handleChange}
                    style={{ ...inputStyle, background: '#fff', appearance: 'none', cursor: 'pointer' }}>
                    <option>Buying</option>
                    <option>Renting</option>
                    <option>Selling</option>
                    <option>Valuation</option>
                    <option>New Homes</option>
                    <option>General</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '32px' }}>
                <label style={{ fontSize: '13px', fontWeight: 600, color: '#374151', display: 'block', marginBottom: '6px' }}>Message <span style={{ color: '#ef4444' }}>*</span></label>
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us what you're looking for..." rows={5}
                  style={{ ...inputStyle, resize: 'vertical', borderColor: errors.message ? '#ef4444' : '#e4e4e7' }} />
                {errors.message && <p style={{ color: '#ef4444', fontSize: '12px', margin: '4px 0 0' }}>{errors.message}</p>}
              </div>

              <button type="submit" style={{ background: P, color: '#ffffff', border: 'none', padding: '14px 36px', borderRadius: '9px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '-0.01em' }}>
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* RIGHT: Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Office Card */}
          <div style={{ border: '1.5px solid #e4e4e7', borderRadius: '16px', padding: '28px', background: '#ffffff' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 20px', letterSpacing: '-0.01em' }}>Our Office</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: '#374151' }}>
              <div>
                <p style={{ margin: 0, fontWeight: 700, color: '#0f172a', fontSize: '15px' }}>Gateway Homes NI</p>
                <p style={{ margin: '4px 0 0', color: '#6b7280' }}>12 Strand Road, Waterside, Derry, BT47 6NH</p>
              </div>
              <div style={{ paddingTop: '12px', borderTop: '1px solid #f0f0f2', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <a href="tel:02871234567" style={{ color: P, textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>028 7123 4567</a>
                <a href="mailto:info@gatewayhomesni.co.uk" style={{ color: P, textDecoration: 'none', fontSize: '13px' }}>info@gatewayhomesni.co.uk</a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div style={{ border: '1.5px solid #e4e4e7', borderRadius: '16px', padding: '28px', background: '#ffffff' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 18px', letterSpacing: '-0.01em' }}>Opening Hours</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              {[
                { day: 'Monday – Friday', hours: '9:00am – 5:30pm' },
                { day: 'Saturday', hours: '10:00am – 2:00pm' },
                { day: 'Sunday', hours: 'Closed' },
              ].map(({ day, hours }) => (
                <div key={day} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px', borderBottom: '1px solid #f0f0f2' }}>
                  <span style={{ color: '#374151', fontWeight: 500 }}>{day}</span>
                  <span style={{ color: hours === 'Closed' ? '#9ca3af' : P, fontWeight: 700 }}>{hours}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services quick links */}
          <div style={{ border: `1.5px solid #ddd6fe`, borderRadius: '16px', padding: '28px', background: PLight }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a', margin: '0 0 16px', letterSpacing: '-0.01em' }}>Our Services</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Free Property Valuation', desc: 'No obligation, honest market appraisal' },
                { label: 'Sales & Lettings', desc: 'Expert guidance from listing to completion' },
                { label: 'New Developments', desc: 'First access to new build properties' },
                { label: 'Landlord Services', desc: 'Full management and tenant find' },
              ].map((s) => (
                <div key={s.label} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: P, flexShrink: 0, marginTop: '5px' }} />
                  <div>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: '14px', color: '#0f172a' }}>{s.label}</p>
                    <p style={{ margin: '2px 0 0', fontSize: '12px', color: '#6b7280' }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
