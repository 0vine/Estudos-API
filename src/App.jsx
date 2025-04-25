import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [dados, setDados] = useState("")

  const buscarDados = async () => {
    try {
      const resposta = await fetch("https://api.kanye.rest")
      const data = await resposta.json();
      setDados(data.quote);
    } catch(error) {
console.error("Erro ao buscar dados:", error);

    }
  
  };

  console.log(dados)

  return (
    <>
    <h1>Frases Kanye West</h1>
    <button onClick={buscarDados}>Gerar</button>
    <p>{dados}</p>
    </>
  )
}

export default App
