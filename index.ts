import express from 'express';
import { env } from 'process'
import { config } from 'dotenv';

config();

const PORT = env.PORT || 3000;

const app = express();

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
