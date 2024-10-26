/* eslint-disable react/prop-types */

import { useState } from 'react';
import './App.css';

function App() {
  const [advice, setAdvice] = useState();
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    console.log(data.slip.advice);
    setCount((count) => count + 1);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-200 p-4">
      <h1 className="md:text-4xl md:font-bold text-2xl font-medium mb-6 text-center">
        Welcome To Quotes Generator
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl text-center mb-4">{advice || "Click 'Next' for advice!"}</h2>
        <button
          className="bg-blue-500 text-white p-2 rounded-md w-full hover:bg-blue-600 transition"
          onClick={getAdvice}
        >
          Next
        </button>
        <Message count={count} />
      </div>
    </div>
  );
}

function Message(props) {
  return (
    <p className="mt-4 text-center">
      You have read{' '}
      <span className="font-bold text-2xl">{props.count}</span> times. Please read more to increase your interest in reading!
    </p>
  );
}

export default App;
