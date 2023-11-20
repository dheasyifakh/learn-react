import { useState } from 'react';

export default function GenerateNumber() {
  const [startRange, setStartRange] = useState('');
  const [endRange, setEndRange] = useState('');
  const [randomNumOrError, setRandomNumOrError] = useState('Enter Valid Input');

  const handleGenerate = (e) => {
    e.preventDefault(); // Prevent form submission

    if (!startRange || !endRange || isNaN(startRange) || isNaN(endRange)) {
      setRandomNumOrError('Invalid Input');
      return;
    }

    const start = parseInt(startRange, 10);
    const end = parseInt(endRange, 10);

    if (start > end) {
      setRandomNumOrError('Invalid Range');
      return;
    }

    const randomNumber = Math.floor(Math.random() * (end - start + 1)) + start;
    setRandomNumOrError(randomNumber);
  };

  return (
    <>
      <h1>Hello there!</h1>
      <form>
        <label> Start Range:
          <input 
            type="number" 
            value={startRange} 
            onChange={(e) => setStartRange(e.target.value)}
            id="startRange"
          />
        </label>
        <label> End Range:
          <input 
            type="number" 
            value={endRange} 
            onChange={(e) => setEndRange(e.target.value)}
            id="endRange"
          />
        </label>
        <button onClick={handleGenerate} id="generate">Generate Number</button>
        <div id="randomNumber">
          {randomNumOrError}
        </div>
      </form>
    </>
  );
}