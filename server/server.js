import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

// OBRIGATÓRIO PARA LER JSON
app.use(express.json());

app.use(cors());

// Rota de teste
app.get("/ping", (req, res) => {
  res.send("Servidor do Projeto C4 está rodando!");
});

// Rota que recebe os dados do front
app.post("/enviar", (req, res) => {
  console.log("BODY RECEBIDO:", req.body);

  res.json({
    sucesso: true,
    recebido: req.body.mensagem || "nada recebido"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});