import express from 'express';

const app = express();

const port = 3334

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`)
});