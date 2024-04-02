import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import userRoutes from './routes/userRoutes';
import specs from './docs/swagger';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
