import styles from './Skills.module.css'
import styleContainer from '../Common/Styles/Container.module.css'

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>

                </div>
            </div>
        </div>
    )
}