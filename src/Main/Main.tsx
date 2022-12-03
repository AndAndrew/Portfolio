import styles from './Main.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'

export const Main = () => {
    return (
        <div className={styles.mainBlock}>
            <div className={styleContainer.container}>
                <div className={styles.greetingsText}>
                    <span className={styles.greeting}>Hi There</span>
                    <h1 className={styles.name}>I am Andrey Krivokhizhin</h1>
                    <span className={styles.speciality}>Frontend Developer</span>
                </div>
                <div className={styles.photo}></div>
            </div>
        </div>
    )
}