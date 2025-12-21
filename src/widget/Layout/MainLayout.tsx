
import { Header } from "../../shared/ui/Header/Header"
import styles from "./MainLayout.module.css"
import { AppRouter } from "../../app/router/ui/AppRouter"


export const MainLayout = () => {
    return(<div className={styles.mainLayout}>
        <Header />
        <main className={styles.main}>
        <AppRouter />
        </main>
    </div>)
}