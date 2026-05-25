import express from 'express';
import cors from 'cors';
import emailRoutes from './routes/email.js';

const app = express();

app.use(
  cors({
    origin: ['http://localhost:5173', 'https://www.joybeartoys.com', 'https://joybeartoys.com'],
  })
);

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'JoyBear Backend API is running' });
});

app.get('/healthz', (req, res) => {
  res.status(200).json({ ok: true, service: 'joybear-backend' });
});

app.get('/internal/ping', (req, res) => {
  const expectedToken = process.env.CRON_PING_TOKEN;
  const providedToken = req.header('x-cron-ping-token');

  // If token is configured, require it to reduce abuse.
  if (expectedToken && providedToken !== expectedToken) {
    return res.status(404).json({ ok: false });
  }

  return res.status(200).json({ ok: true, pinnedAt: new Date().toISOString() });
});

app.use('/api/email', emailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
