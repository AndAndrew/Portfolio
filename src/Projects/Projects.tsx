import styles from './Projects.module.scss'
import {Project} from "./Project/Project";
import styleContainer from "../Common/Styles/Container.module.css";
import {Title} from "../Common/Components/Title/Title";
import todosImage from "./../Assets/Images/todo-s.png"
import socialNImage from "./../Assets/Images/socialN.jpg"

export const Projects = () => {
    const todos = {
        backgroundImage: `url(${todosImage})`
    }
    const socialN = {
        backgroundImage: `url(${socialNImage})`
    }
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={styles.projects}>
                    <Project style={todos}
                             title={'ToDo List'}
                             description={'ToDo List Project ToDo List Project ToDo List Project ToDo List Project ToDo List Project ToDo List Project ToDo List Project ToDo List Project ToDo List Project ToDo List Project ToDo List Project'}/>
                    <Project style={socialN}
                             title={'Social Network'}
                             description={'Social Network Project Social Network Project Social Network Project Social Network Project Social Network Project'}/>
                </div>
            </div>
        </div>
    )
}
