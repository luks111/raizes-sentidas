import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Carregando...");
  const [texto, setTexto] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/ping")
      .then(res => res.text())
      .then(data => setMsg(data))
      .catch(() => setMsg("Erro ao conectar com o servidor"));
  }, []);

  function enviarParaServer() {
    fetch("http://localhost:5000/enviar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ mensagem: texto })
    })
      .then(res => res.json())
      .then(data => {
        console.log("Resposta do servidor:", data);

       // alert("Servidor recebeu: " + data.recebido);
       
      })
      .catch(err => console.error("Erro:", err));
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 flex-col gap-4">

      <h1 className="text-2xl font-bold">{msg}</h1>

      <input
        type="text"
        value={texto}
        onChange={e => setTexto(e.target.value)}
        placeholder="Digite algo..."
        className="border border-gray-400 p-2 rounded w-64"
      />

      <button
        onClick={enviarParaServer}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
      Enviar
      </button>


    </div>
  );
}

export default App;