import styles from './Project.module.scss'

type PropsType = {
    style: {}
    title: string,
    description: string
}

export const Project = (props: PropsType) => {
    return (
        <div className={styles.project}>
            <div className={styles.imageContainer} style={props.style}>
                <a href={''} className={styles.viewButton}>View</a>
            </div>
            <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    )
}