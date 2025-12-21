import styles from "./Header.module.css"

interface HeaderProps {
    children?: React.ReactNode
}


export const Header =({children}: HeaderProps)=>{
    return (
        <div className={styles.header}>
            {children}
        </div>
    )
}