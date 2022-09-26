import styles from './Main.module.css'
import styleContainer from '../Common/Styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.greetingsText}>
                    <span>Hi There</span>
                    <h1>I am Andrey Krivokhizhin</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    )
}