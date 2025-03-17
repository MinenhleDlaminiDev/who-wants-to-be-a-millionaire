import { useEffect, useState } from "react";
import useSound from "use-sound";
import correct from "../assets/sounds/correct.mp3";
import play from "../assets/sounds/play.mp3";
import wrong from "../assets/sounds/wrong.mp3";

const Quiz = ({ setQuestionNumber, questionNumber, setStop, data }) => {
    // state for question and answers
    const [question, setQuestion] = useState(null);
    // state for selected answer
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    // state for classname to add in selected answer input
    const [className, setClassName] = useState("answer");

    // using sounds
    const [letsPlay] = useSound(play);
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    // useEffect for lets play function
    useEffect(() => {
        letsPlay();
    }, [letsPlay]);

    // function for delayed actions
    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };

    // function to handle clicking answer
    const handleClick = (answer) => {
        setSelectedAnswer(answer);
        setClassName("answer active");

        // Check if selected answer is correct
        delay(1000, () =>
            setClassName(answer === question.correct_answer ? "answer correct" : "answer incorrect")
        );

        delay(3000, () => {
            if (answer === question.correct_answer) {
                correctAnswer();
                delay(1000, () => {
                    setQuestionNumber((prev) => prev + 1);
                    setSelectedAnswer(null);
                });
            } else {
                wrongAnswer();
                delay(1000, () => setStop(true));
            }
        });
    };

    // state lifecycle for setting a new question
    useEffect(() => {
        if (data && data[questionNumber - 1]) {
            setQuestion(data[questionNumber - 1]);
        }
    }, [data, questionNumber]);

    return (
        <div className="quiz">
            <div className="question">{question?.questions}</div>
            <div className="answers">
                {question?.answers &&
                    Object.keys(question.answers).map((answer, index) => (
                        <div
                            key={index}
                            className={selectedAnswer === answer ? className : "answer"}
                            onClick={() => handleClick(answer)}
                        >
                            {answer}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Quiz;
