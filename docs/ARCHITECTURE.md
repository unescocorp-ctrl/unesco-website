# Architecture

```text
GitHub -> CI/CD -> Astro static website -> CDN
                    |-> ASP.NET Core API -> SQL Server
                    |-> Download CDN/Object Storage
```

Marketing site, API, download storage and future license service are intentionally decoupled. A marketing outage must not disable already-licensed desktop software.
