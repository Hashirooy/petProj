import styles from "./Input.module.css"

interface InputProps{
    fieldName: string;
    placeholder: string;
    type: string;
    value: string;
    onChange?: (value: string) => void;
}

export const Input = ({ fieldName, placeholder, type, value, onChange }: InputProps) => {


    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }
    return(
        <div className={styles.inputContainer}>
            <h2>{fieldName}</h2>
            <input className={styles.input} placeholder={placeholder} type={type} value={value} onChange={onChangeHandler} />
        </div>
    )
}