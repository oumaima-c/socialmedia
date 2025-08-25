// server.js
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import connectDB from './configs/db.js';
import { functions } from './inngest/index.js';
import { Inngest } from 'inngest';
import { serve } from 'inngest/express';

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.get('/', (req, res) => res.send('Server is running'));

// inngest route
const inngest = new Inngest({ id: "my-app" });
app.use('/api/inngest', serve({ client: inngest, functions }));

// instead of app.listen (❌)
export default app;
