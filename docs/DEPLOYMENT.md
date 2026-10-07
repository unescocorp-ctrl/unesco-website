# Deployment

## Web
Build command: `npm install --no-audit --no-fund && npm run build`
Output: `apps/web/dist`
Node: 22+

## API
Target: .NET 10 LTS
Set `ConnectionStrings__UNESCO_WEB` and `AllowedOrigins__0` in server secrets/environment.
Run database `001_init.sql` before first production API run.

## Production gates
1. Replace all `{{...}}` placeholders.
2. Supply official installer metadata.
3. Approve legal copy.
4. Configure DNS/HTTPS.
5. Configure CI secrets.
6. Run UAT.
