import styles from './Input.module.css'

const Input = ({displayValue}) => {
    return <input type="text" className={styles.input} value={displayValue} readOnly />
}

export default Input;