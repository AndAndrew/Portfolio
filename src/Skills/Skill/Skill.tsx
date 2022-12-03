import styles from './Skill.module.scss'

type PropsType = {
    title: string,
    description: string
}

export const Skill = (props: PropsType) => {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}></div>
            <div className={styles.skillInfo}>
                <h3 className={styles.title}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    )
}