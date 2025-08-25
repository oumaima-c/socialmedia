import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import { Inngest,functions } from './inngest/index.js';



const app = express();

// Connect to DB before starting the server
const startServer = async () => {
  try {
    await connectDB();

    // middlewares
    app.use(express.json()); 
    app.use(cors());

    // routes
    app.get('/', (req, res) => res.send('Server is running'));
app.use('/api/inngest',serve({ client: inngest, functions }))
    // port
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => 
      console.log(`✅ Server is running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error('❌ Failed to connect to DB:', error.message);
    process.exit(1);
  }
};

startServer();
