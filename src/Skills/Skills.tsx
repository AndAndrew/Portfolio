import styles from './Skills.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Title} from "../Common/Components/Title/Title";

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={styles.skills}>
                    <Skill title={'JS'} description={'JS skills JS skills JS skills JS skills JS skills'}/>
                    <Skill title={'HTML'} description={'HTML skills HTML skills HTML skills HTML skills HTML skills'}/>
                    <Skill title={'CSS'}
                           description={'CSS skills CSS skills CSS skills CSS skills CSS skills CSS skills'}/>
                    <Skill title={'REACT'}
                           description={'REACT skills REACT skills REACT skills REACT skills REACT skills REACT skills'}/>
                </div>
            </div>
        </div>
    )
}