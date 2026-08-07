// ─── Cookie Consent Utility ────────────────────────────────────────────────
// Central source of truth for consent state across the app.

export const CONSENT_KEY = 'dejure_cookie_consent';
export const CONSENT_TTL_MS = 365 * 24 * 60 * 60 * 1000; // 12 months
export const CONSENT_EVENT = 'dejure:consent-changed';

export type ConsentDecision = 'accepted' | 'declined';

interface ConsentRecord {
  decision: ConsentDecision;
  ts: number; // timestamp when the choice was made
}

/** Read stored consent. Returns null if not set or expired. */
export function getConsent(): ConsentDecision | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const record: ConsentRecord = JSON.parse(raw);
    if (!record.decision || !record.ts) return null;
    // Expired?
    if (Date.now() - record.ts > CONSENT_TTL_MS) {
      localStorage.removeItem(CONSENT_KEY);
      return null;
    }
    return record.decision;
  } catch {
    return null;
  }
}

/** Save consent decision and dispatch a DOM event so listeners can react. */
export function setConsent(decision: ConsentDecision): void {
  if (typeof window === 'undefined') return;
  const record: ConsentRecord = { decision, ts: Date.now() };
  localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: { decision } }));
}

/** True if user has explicitly accepted optional cookies. */
export function isAccepted(): boolean {
  return getConsent() === 'accepted';
}
