import { useEffect, useState } from "react";

export default function Timer({ setStop, questionNumber }) {
    // State for time
    const [timer, setTimer] = useState(30);

    // useEffect for timer
    useEffect(() => {
        // Exit if timer reaches 0
        if (timer <= 0) {
            setStop(true);
            return;
        }

        // Set interval to decrement timer every second
        const interval = setInterval(() => {
            setTimer((prevTime) => prevTime - 1);
        }, 1000);

        // Cleanup function to clear interval when component unmounts or timer changes
        return () => clearInterval(interval);

    }, [timer, setStop]);

    useEffect(() => {
        setTimer(30);
    }, [questionNumber])

    return timer;
}
