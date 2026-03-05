import express from 'express';
import cors from 'cors';
import emailRoutes from './routes/email.js';

const app = express(); 
//Creates the Express app (your server)

app.use(cors({
  origin: 'http://localhost:5173', 
  // Your React frontend, cors中间件赋权
}));
//Sets up CORS → "only allow requests from localhost:5173"

app.use(express.json());
//lets the server understand JSON data sent from the frontend

app.get('/', (req, res) => {
  res.json({ message: 'JoyBear Backend API is running' });
});
//GET "/" → if someone visits the root URL, reply with "API is running"

app.use('/api/email', emailRoutes);
//Connects the email routes → any request to "/api/email/..." gets handled by email.ts

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
//Starts the server on port 5000 and prints a message