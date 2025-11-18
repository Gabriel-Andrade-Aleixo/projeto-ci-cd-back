import express from 'express';
import cors from 'cors';

const app = express();

// Configuração de CORS
const corsOptions = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({ mensagem: 'API online e integrada com CI/CD! Pão' });
});

// Endpoint opcional de saúde
app.get('/v1/health', (req, res) => {
  res.json({ status: 'okay!'});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});