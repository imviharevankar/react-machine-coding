import { useState } from "react";

const CoinToss = () => {
  const [loading, setLoading] = useState(false);
  const [outcome, setOutcome] = useState("T");

  const handleTossOutcome = () => {
    setLoading(true);
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum > 0.5) {
        setOutcome("H");
      } else {
        setOutcome("T");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <h1>Coin Toss</h1>
      <h1>{loading ? "Loading" : outcome}</h1>
      <button onClick={handleTossOutcome}>FLIP</button>
    </div>
  );
};

export default CoinToss;
