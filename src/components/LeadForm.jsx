import { useState } from 'react';

// Google Form wiring. Real endpoint and entry IDs, confirmed against the
// live form's pre-filled link.
const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSeSIVz6pn2S5zGQ0e3sUfg8Ah1RriFjdJMxqMOvh54WsL2V0Q/formResponse';
const ENTRY_IDS = {
  name: 'entry.1014459275',
  email: 'entry.1453711160',
  phone: 'entry.572278396'
};

// TODO(founder/admissions): replace with the real WhatsApp group invite link.
const WHATSAPP_GROUP_LINK = 'PASTE_YOUR_GROUP_INVITE_LINK_HERE';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = 'Enter your full name.';
  if (!EMAIL_PATTERN.test(form.email)) errors.email = 'Enter a valid email address.';
  const digits = form.phone.replace(/\D/g, '');
  if (digits.length < 10) errors.phone = 'Enter a valid phone number.';
  return errors;
}

async function submitLead(data) {
  const body = new URLSearchParams();
  body.append(ENTRY_IDS.name, data.name);
  body.append(ENTRY_IDS.email, data.email);
  body.append(ENTRY_IDS.phone, data.phone);
  if (data.source) body.append('entry.source', data.source);

  // no-cors means the response is opaque and we cannot read its status.
  // That is the standard way to post to a Google Form from a static site
  // without a backend, so we treat the fetch resolving as success.
  await fetch(GOOGLE_FORM_ACTION_URL, {
    method: 'POST',
    mode: 'no-cors',
    body
  });
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.85.505 3.583 1.383 5.068L2 22l5.06-1.36A9.94 9.94 0 0 0 12 22c5.523 0 10-4.478 10-10S17.523 2 12 2Zm0 18a7.94 7.94 0 0 1-4.062-1.115l-.29-.172-3.005.807.81-2.93-.19-.302A7.94 7.94 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8Z" />
    </svg>
  );
}

export default function LeadForm({ source = 'lead-form' }) {
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    try {
      await submitLead({ ...form, source });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-8 md:p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-[var(--lime)]/20 border border-[var(--lime-deep)]/40 flex items-center justify-center mx-auto mb-5">
          <span className="text-[var(--lime-deep)] text-2xl">✓</span>
        </div>
        <h3 className="font-display text-2xl md:text-3xl mb-3 text-[var(--ink)]">You are in.</h3>
        <p className="text-[var(--charcoal)] max-w-md mx-auto leading-relaxed">
          Our team will call you within a few hours with pricing, seat availability, and next steps.
        </p>
        <a
          href={WHATSAPP_GROUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[var(--lime-deep)] hover:brightness-95 transition"
        >
          <WhatsAppIcon className="w-4 h-4" />
          Join our WhatsApp group for updates, seat availability, and direct access to the mentor team
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-8 md:p-10"
    >
      <div className="grid gap-5">
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-widest text-[var(--mist)] mb-2">
            Full Name
          </label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-xl px-4 py-3 text-[var(--ink)] placeholder:text-[var(--mist)] focus:outline-none focus:border-[var(--lime-deep)] transition"
          />
          {errors.name && <p className="mt-1.5 font-mono text-[11px] text-[var(--terracotta)]">{errors.name}</p>}
        </div>
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-widest text-[var(--mist)] mb-2">
            Email
          </label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="you@email.com"
            className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-xl px-4 py-3 text-[var(--ink)] placeholder:text-[var(--mist)] focus:outline-none focus:border-[var(--lime-deep)] transition"
          />
          {errors.email && <p className="mt-1.5 font-mono text-[11px] text-[var(--terracotta)]">{errors.email}</p>}
        </div>
        <div>
          <label className="block font-mono text-[11px] uppercase tracking-widest text-[var(--mist)] mb-2">
            Phone Number
          </label>
          <input
            required
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 00000 00000"
            className="w-full bg-[var(--paper)] border border-[var(--line)] rounded-xl px-4 py-3 text-[var(--ink)] placeholder:text-[var(--mist)] focus:outline-none focus:border-[var(--lime-deep)] transition"
          />
          {errors.phone && <p className="mt-1.5 font-mono text-[11px] text-[var(--terracotta)]">{errors.phone}</p>}
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="mt-2 w-full bg-[var(--lime)] text-[var(--ink)] font-display font-semibold px-7 py-4 rounded-full hover:brightness-95 transition disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Get Pricing & Seat Availability'}
        </button>

        {status === 'error' && (
          <p className="font-mono text-xs text-center text-[var(--charcoal)]">
            Something went wrong. Join our{' '}
            <a href={WHATSAPP_GROUP_LINK} target="_blank" rel="noopener noreferrer" className="text-[var(--lime-deep)]">
              WhatsApp group
            </a>{' '}
            instead.
          </p>
        )}

        <p className="font-mono text-[10px] text-center text-[var(--mist)]">
          No spam. Just a call from admissions with pricing and next steps.
        </p>
      </div>
    </form>
  );
}
