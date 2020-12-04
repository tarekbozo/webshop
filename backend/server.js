import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import connectDb from './config/db.js';
import productRouts from './routes/productRouts.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

dotenv.config();
connectDb();

const app = express();
app.use(cors());
app.use(helmet());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/products', productRouts);
app.use(notFound);
app.use(errorHandler);

const __dirname = path.resolve();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

app.listen(PORT, console.log(`Server is running ${MODE} on port ${PORT}`));
