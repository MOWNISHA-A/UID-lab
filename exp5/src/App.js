import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const handleIncrement = () => {
    setCount(count + 1);
    setHistory([...history, "Incremented by 1"]);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    setHistory([...history, "Decremented by 1"]);
  };

  const handleReset = () => {
    setCount(0);
    setHistory([...history, "Reset to 0"]);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f5f5f5",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ fontSize: "2.5rem", color: "#333" }}>Counter App</h1>
      <h2 style={{ fontSize: "2rem", margin: "20px", color: "#0077b6" }}>{count}</h2>
      <div>
        <button 
          onClick={handleIncrement} 
          style={{ padding: "10px 20px", margin: "5px", fontSize: "1rem", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }}>
          Increment
        </button>
        <button 
          onClick={handleDecrement} 
          style={{ padding: "10px 20px", margin: "5px", fontSize: "1rem", backgroundColor: "#f44336", color: "white", border: "none", borderRadius: "5px" }}>
          Decrement
        </button>
        <button 
          onClick={handleReset} 
          style={{ padding: "10px 20px", margin: "5px", fontSize: "1rem", backgroundColor: "#2196F3", color: "white", border: "none", borderRadius: "5px" }}>
          Reset
        </button>
      </div>

      {/* History Section */}
      <div style={{ marginTop: "30px", width: "60%", textAlign: "center" }}>
        <h3 style={{ color: "#444" }}>History</h3>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {history.map((item, index) => (
            <li key={index} style={{ color: "#555", margin: "5px 0" }}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
