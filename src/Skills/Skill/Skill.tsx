import styles from './Skill.module.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

type PropsType = {
    svg?: any
    icon?: any,
    title: string,
    description: string
}

export const Skill = (props: PropsType) => {
    return (
        <div className={styles.skill}>
            {props.svg
                ? <img src={props.svg} className={styles.icon}/>
                : <FontAwesomeIcon className={styles.icon} icon={props.icon}/>}
            <div className={styles.skillInfo}>
                <h3 className={styles.title}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    )
}