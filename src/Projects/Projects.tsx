import styles from './Projects.module.css'
import {Project} from "./Project/Project";
import styleContainer from "../Common/Styles/Container.module.css";

export const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects}>
                    <Project title={'ToDo List'}
                             description={'ToDo List Project ToDo List Project ToDo List Project ToDo List Project ToDo List Project'}/>
                    <Project title={'Social Network'}
                             description={'Social Network Project Social Network Project Social Network Project Social Network Project Social Network Project'}/>
                </div>
            </div>
        </div>
    )
}
