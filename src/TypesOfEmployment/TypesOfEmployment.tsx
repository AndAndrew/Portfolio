import styles from './TypesOfEmployment.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import {Title} from "../Common/Components/Title/Title";

export const TypesOfEmployment = () => {
    return (
        <div className={styles.TypesOfEmploymentBlock}>
            <div className={`${styleContainer.container} ${styles.typesOfEmploymentContainer}`}>
                <Title title={'Considered Types Of Employment'}/>
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