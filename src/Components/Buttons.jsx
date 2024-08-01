import styles from "./Buttons.module.css"

const buttonCalc = ['C', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
const CalculatorButtons = ({onButtonClicked}) => {
    return <>
    <div className={styles.buttons}>

      {buttonCalc.map(buttonName => <button type="button" className={styles.button} onClick={() => onButtonClicked(buttonName)}>{buttonName}</button>)}
      
      </div>
      </>
}

export default CalculatorButtons;