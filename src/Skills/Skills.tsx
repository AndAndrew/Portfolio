import styles from './Skills.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../Common/Components/Title/Title";
import {faJs} from "@fortawesome/free-brands-svg-icons/faJs";
import {faHtml5} from "@fortawesome/free-brands-svg-icons/faHtml5";
import {faCss3} from "@fortawesome/free-brands-svg-icons/faCss3";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import reduxIcon from "../Assets/Images/redux.svg"

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={styles.skills}>
                    <Skill icon={faJs}
                           title={'JS'}
                           description={'JS skills JS skills'}/>
                    <Skill icon={faHtml5}
                           title={'HTML'}
                           description={'HTML skills HTML skills'}/>
                    <Skill icon={faCss3}
                           title={'CSS'}
                           description={'CSS skills CSS skills'}/>
                    <Skill icon={faReact}
                           title={'REACT'}
                           description={'REACT skills REACT skills'}/>
                    <Skill svg={reduxIcon}
                           title={'REDUX'}
                           description={'REDUX skills REDUX skills'}/>
                </div>
            </div>
        </div>
    )
}