### Joybear website backend

This is the backend for Joybear frontend (Express + TypeScript).

## Safe keep-alive route for Render

Use a dedicated token-protected endpoint instead of pinging business APIs.

### 1) Environment variable

Add this env var in your Render Web Service:

- `CRON_PING_TOKEN` = a long random secret

### 2) Endpoints

- `GET /healthz` (public): lightweight health endpoint
- `GET /internal/ping` (protected): used only by cron keep-alive

`/internal/ping` checks header `x-cron-ping-token` against `CRON_PING_TOKEN`.
If token does not match, it returns `404`.

### 3) Render Cron Job (recommended)

Create a separate Render Cron Job service with schedule every 10-14 minutes.
Use command:

```bash
curl -fsS -H "x-cron-ping-token: $CRON_PING_TOKEN" https://<your-backend-domain>/internal/ping >/dev/null
```

Notes:
- Keep this cron job private to your team.
- Do not expose token in URL query params.
- Keep the endpoint lightweight (no DB writes, no side effects).
