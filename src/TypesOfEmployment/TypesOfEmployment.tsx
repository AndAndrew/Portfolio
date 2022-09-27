import styles from './TypesOfEmployment.module.css'
import styleContainer from '../Common/Styles/Container.module.css'

export const TypesOfEmployment = () => {
    return (
        <div className={styles.TypesOfEmploymentBlock}>
            <div className={`${styleContainer.container} ${styles.typesOfEmploymentContainer}`}>
                <h2 className={styles.title}>Considered Types Of Employment</h2>
                <div className={styles.items}>
                    <div className={styles.item}>Remote Job</div>
                    <div className={styles.item}>Full-time</div>
                    <div className={styles.item}>Part-time</div>
                </div>
                <a href={''} className={styles.hireMeButton}>Hire Me!</a>
            </div>
        </div>
    )
}