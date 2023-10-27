import Styles from "./ExerciseSelect.module.css";
import ExerciseInfo from "./ExerciseInfo.js"

function ExerciseContentFrame() {
    return(
        <section>
            <div>
                <div className={Styles.ExerciseContentFrame}>
                    <div className={Styles.RealcamFrame}>
                        <div className={Styles.RealcamSpace}>
                            Space 4 cam 
                        </div>
                    </div>
                    <div className={Styles.ExerciseRoutineFrame}>
                        <div className={Styles.ExerciseRoutine}>
                            <ExerciseInfo 
                                ExerciseCategory="카테고리"
                                ExerciseName="운동명"
                            />
                        </div>
                        <div className={Styles.ExerciseRoutine}>
                            <ExerciseInfo 
                                ExerciseCategory="카테고리"
                                ExerciseName="운동명"
                            />
                        </div>
                        <div className={Styles.ExerciseRoutine}>
                            <ExerciseInfo 
                                ExerciseCategory="카테고리"
                                ExerciseName="운동명"
                            />
                        </div>
                        <div className={Styles.ExerciseRoutine}>
                            <ExerciseInfo 
                                ExerciseCategory="카테고리"
                                ExerciseName="운동명"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExerciseContentFrame;