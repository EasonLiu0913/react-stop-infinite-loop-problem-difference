import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

let isBusyOutside = false;

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [isBusy, setIsBusy] = useState(false);

    const startCallingApi = () => {
        setIsBusy(true);
        setCount1(count1 + 1);
    };

    const getToken = () => {
        setTimeout(() => {
            if (!isBusy) startCallingApi();
        }, 3000);
    };

    useEffect(() => {
        setIsBusy(false);
        getToken();
    }, [count1]);

    const startCallingApi2 = () => {
        isBusyOutside = true;
        setCount2(count2 + 1);
    };

    const getToken2 = () => {
        setTimeout(() => {
            if (!isBusyOutside) startCallingApi2();
        }, 3000);
    };

    useEffect(() => {
        isBusyOutside = false;
        getToken2();
    }, [count2]);

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button>count1 is {count1}</button>
                <button>count2 is {count2}</button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;
