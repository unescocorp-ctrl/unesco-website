# API V1
Base: `/api/v1`
- `GET /health`
- `POST /leads`
- `POST /support-requests`
- `GET /products`
- `GET /products/{code}`
- `GET /releases/{productCode}/latest`

Quote/demo requests share the lead endpoint through `requestType` and `interestCode`. Public write endpoints are rate-limited and validated before persistence.
