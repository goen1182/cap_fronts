import Styles from "./ExerciseSelect.module.css";

function ExerciseStartBtn({text}){
    return <button className={Styles.ExerciseStartBtn}>{text}</button>
}

export default ExerciseStartBtn;