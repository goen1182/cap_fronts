import back from "./background.module.css";
import ExerciseFrame from "./ExerciseFrame";

function Exercise() {
    return(
        <div className = {back.body}>
            <ExerciseFrame />

        </div>
    
    );
}
  
export default Exercise;