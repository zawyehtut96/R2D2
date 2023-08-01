import React, { useState } from "react";
import axios from "axios";

const CompetitorResearch = () => {
  const [taskInput, setTaskInput] = useState("");
  const [result, setResult] = useState("");

  const handleGenerate = () => {
    axios.post("http://localhost:8000/competitor_research/", { task_input: taskInput })
      .then(response => {
        setResult(response.data.result);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Competitor Research</h2>
      <textarea value={taskInput} onChange={e => setTaskInput(e.target.value)} />
      <button onClick={handleGenerate}>Generate</button>
      <div>
        <h3>Generated Result:</h3>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default CompetitorResearch;
