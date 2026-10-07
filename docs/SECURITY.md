# Security baseline
- HTTPS only in production.
- CORS allowlist.
- Rate limit public write endpoints.
- Request validation.
- No production secrets in frontend or repository.
- No customer accounting files in public repository.
- Hash IP before storing lead anti-abuse trace.
- Security headers set by API; CDN should add CSP/HSTS after production domain verification.
- Download release only after SHA-256 verification.
