import { useState } from 'react'
import './App.css'

function App() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [result, setResult] = useState("")


function calculateBMI () {
  if(weight && height) {
    const bmi = (parseFloat(weight) / parseFloat(height*height)).toFixed(2)
    let classification = ''

    if (bmi < 18.5) {
      classification = 'Abaixo do peso';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      classification = 'Peso normal';
    } else if (bmi >= 25 && bmi < 29.9) {
      classification = 'Sobrepeso';
    } else if (bmi >= 30 && bmi < 34.9) {
      classification = 'Obesidade Grau I';
    } else if (bmi >= 35 && bmi < 39.9) {
      classification = 'Obesidade Grau II';
    } else {
      classification = 'Obesidade Grau III';
    }

    setResult( {bmi, classification} )
    }

  }

  return (
      <>
        <form>
          <h1>CALCULADORA DE IMC</h1>
          <input type="number" placeholder='Peso (kg)' value={weight}  onChange={(e) => setWeight(e.target.value)}/>
          <input type="number" placeholder='Altura (m)' value={height} onChange={(e) => setHeight(e.target.value)} />
          <button type="button" onClick={calculateBMI}>Calcular</button>
        </form>
        {result && (
          <div className="result">
            <h2>Seu resultado: {result.bmi}</h2>
            <h2>Sua classificação: {result.classification}</h2>
          </div>
        )}
      </>
  )
}

export default App
