import React, { useState, useEffect } from "react";

function CounterAlert() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`Count changed to: ${count}`);
  }, [count]); // Only run when 'count' changes

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default CounterAlert;
