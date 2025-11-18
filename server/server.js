import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// Permite que o React acesse o servidor
app.use(cors());

// Rota de teste
app.get("/ping", (req, res) => {
  res.send("Servidor do Projeto C4 está rodando!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
