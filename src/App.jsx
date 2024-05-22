import './styles/App.css'

import { useState } from 'react'

import Input from './components/Input'
import Button from './components/Button'

function App() {

  const [ currentNumber, setCurrentNumber ] = useState('0')
  const [ firstNumber, setFirstNumber ] = useState('0')
  const [ currentOperation, setCurrentOperation ] = useState(null)

  const handleClear = () => {
    setCurrentNumber('0')
  }

  const handleClearAll = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setCurrentOperation(null)
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleDeleteNumber = () => {
    const result = currentNumber.slice(0, -1)
    if (result.length) {
      setCurrentNumber(result)
    } else {
      setCurrentNumber('0')
    }
  }

  const handleSum = () => {
    setCurrentOperation('+')
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      handleClear()
    } else {
      const sum = Number(currentNumber) + Number(firstNumber)

      setCurrentNumber(String(sum))
    }
  }

  const handleSubtraction = () => {
    setCurrentOperation('-')
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      handleClear()
    } else {
      const subtraction = Number(firstNumber) - Number(currentNumber)

      setCurrentNumber(String(subtraction))
    }
  }
  
  const handleDivision = () => {
    setCurrentOperation('/')
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      handleClear()
    } else {
      const division = Number(firstNumber) / Number(currentNumber)

      setCurrentNumber(String(division))
    }
  }

  const handleMultiplication = () => {
    setCurrentOperation('*')
    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      handleClear()
    } else {
      const multiplication = Number(firstNumber) * Number(currentNumber)

      setCurrentNumber(String(multiplication))
    }
  }

  const handleEquals = () => {
    const opeations = {
      '+': () => handleSum(),
      '-': () => handleSubtraction(),
      '*': () => handleMultiplication(),
      '/': () => handleDivision(),
    }

    if (currentOperation) {
      const resultado = opeations[currentOperation]
      setFirstNumber('0')
      setCurrentNumber(resultado)
    }
  }

  return (
    <main className='container'>
      <div className='content'>
        <Input value={currentNumber} />
        <div className='row'>
          <Button label="C" onClick={() => handleClearAll()} />
          <Button label="CE" onClick={() => handleClear()} />
          <Button label="del" onClick={() => handleDeleteNumber()} />
          <Button label="+" onClick={() => handleSum()} />
        </div>
        <div className='row'>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="-" onClick={() => handleSubtraction()} />
        </div>
        <div className='row'>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="*" onClick={() => handleMultiplication()} />
        </div>
        <div className='row'>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="/" onClick={() => handleDivision()} />
        </div>
        <div className='row'>
          <Button label="." onClick={() => handleAddNumber('.')} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="=" onClick={() => handleEquals()} />
        </div>
      </div>
    </main>
  )
}

export default App