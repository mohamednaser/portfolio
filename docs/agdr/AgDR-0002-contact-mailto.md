# AgDR-0002: Contact route — mailto-only (no hosted form)

> In the context of US-6 (working contact route, no PHP), facing the choice between Formspree, Getform, Netlify Forms, or mailto, I decided **mailto + prominent LinkedIn/GitHub links** to achieve a zero-secret, zero-backend contact path for local testing and initial launch, accepting that we lose form analytics and must add a hosted provider later if inbound volume justifies it.

## Context

- `contact_process.php` is removed (security risk, dead on GH Pages).
- PRD allows mailto as sufficient for launch.
- Hosted forms require API keys / endpoint URLs in env or public config.

## Decision

**Chosen: mailto** to `nc_m.naser@hotmail.com` (carried from legacy site) on `/contact`.

## Consequences

- No server-side or third-party form handler.
- Revisit Formspree or similar in a follow-up ticket if spam filtering or CRM integration is needed.
