import Styles from "./ExerciseSelect.module.css";
import LogoButton from "./LogoButton";
import Subtitle from "./Subtitle";
import ExerciseContentFrame from "./ExerciseContentFrame";
import ExerciseStartBtn from "./ExerciseStartBtn";

function ExerciseFrame() {
    return(
        <div className={Styles.Frame}>
                <LogoButton text="PostureFlow"/>
                <section>
                    <Subtitle 
                        Subtitle="START!"
                        SubtitleDescription="운동을 시작하세요!"
                    />
                    <ExerciseContentFrame />
                    <div className={Styles.ExerciseStartBtnBox}>
                        <ExerciseStartBtn text="운동 시작"/>
                    </div>
                    
                </section>
        </div>
    )
}

export default ExerciseFrame;