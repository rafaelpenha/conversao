
import { useRef, useState } from 'react';
import './App.css';
import axios from 'axios'


function App() {
  const valorinput2 = useRef();
  const valorinput = useRef();
  const [real,setReal] = useState(0);
  const [dolar,setDolar] = useState(0);
  const [resultado, setResultado] = useState({
    bid: ""
  });
  const [results, setResults] = useState({
    bid: ""
  });


  async function convertDolar() {
    const resposta = await axios.get('https://economia.awesomeapi.com.br/USD-BRL/');
    
    const data = await resposta.data

    const resultado = data[0]

    const bid = Number(resultado.bid)

    const valor = Number(valorinput.current.value)

    setReal(valor * bid);

    console.log(real);

   
  

  }


  async function convertReal() {
    const resposta = await axios.get('https://economia.awesomeapi.com.br/USD-BRL/');
    
    const data = await resposta.data

    const results = data[0]

    const bid = Number(results.bid)

    const valor = Number(valorinput2.current.value)

    setDolar(valor / bid);

     console.log(dolar);

   
    
  }

  return (
    <div className="App">
      <h1>Conversor de moedas</h1>
      <div>
        <p><b>Digite o valor em dolar</b></p>
        <input ref={valorinput} className="entrada" placeholder="Digite o valor"></input>
        <button className="dolar" onClick={convertDolar}>para real R$</button>
        <p><b>São R${real.toFixed(2)} reais </b></p>
      </div>
  
      <div className="recebido">
        <p><b>Digite o valor em real</b></p>
        <input ref={valorinput2} className="convertido" placeholder="Digite o valor"></input>
        <button className="real" onClick={convertReal}>para dolar USD$</button>
        <p><b>São USD${dolar.toFixed(2)} em dolar</b></p>
  
      </div>

    </div>
  );
}

export default App;
