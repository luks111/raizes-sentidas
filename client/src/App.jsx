import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("Carregando...");

  useEffect(() => {
    fetch("http://localhost:5000/ping")
      .then(res => res.text())
      .then(data => setMsg(data))
      .catch(() => setMsg("Erro ao conectar com o servidor"));
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold">{msg}</h1>
    </div>
  );
}

export default App;
