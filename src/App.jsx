import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./Components/Calculator.module.css"
import Input from './Components/InputDisplay'
import CalculatorButtons from './Components/Buttons'
import {useState} from 'react'

function App() {
const [calVal , setcalVal] = useState("")
const onButtonClicked = (buttonText) => {
  if (buttonText === 'C'){
    setcalVal("");
  }
  else if(buttonText === '='){
    setcalVal(eval(calVal))
  }
  else {
    setcalVal(calVal + buttonText)
  }
}
 return(
    <div className={styles.calculator}>
    <Input displayValue = {calVal}></Input>
    <CalculatorButtons onButtonClicked = {onButtonClicked}></CalculatorButtons>  
    </div>
  )
  
}

export default App
