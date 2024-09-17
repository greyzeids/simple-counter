import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "../styles/index.css";
import SecondsCounter from "./component/SecondsCounter.jsx";

const App = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(true);
    const [alertTime, setAlertTime] = useState(null);

    useEffect(() => {
        if (alertTime !== null && seconds === alertTime) {
            alert(`Se alcanzó el tiempo de ${alertTime} segundos`);
        }
    }, [seconds, alertTime]);

    useEffect(() => {
        if (!isRunning) return;

        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStop = () => setIsRunning(false);
    const handleResume = () => setIsRunning(true);
    const handleReset = () => setSeconds(0);

    return (
        <div>
            <SecondsCounter seconds={seconds} />
            <button onClick={handleStop}>Parar</button>
            <button onClick={handleResume}>Reanudar</button>
            <button onClick={handleReset}>Reiniciar</button>
            <input
                type="number"
                placeholder="Tiempo de alerta"
                onChange={(e) => setAlertTime(Number(e.target.value))}
            />
        </div>
    );
};

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
