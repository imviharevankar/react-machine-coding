import { useEffect, useState } from "react";

const TrafficSignal = () => {
  const signals = ["red", "yellow", "green"];
  const [currentSignal, setCurrentSignal] = useState("");

  useEffect(() => {
    const signalInterval = setInterval(() => {
      setCurrentSignal((prevSignal) => {
        const nextIndex = (signals.indexOf(prevSignal) + 1) % signals.length;
        return signals[nextIndex];
      });
    }, 2000);

    return () => clearInterval(signalInterval);
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <div className="w-24 h-64 bg-black flex flex-col items-center justify-around rounded-lg p-2">
        {signals.map((signal) => (
          <div
            key={signal}
            className={"w-16 h-16 rounded-full"}
            style={{
              backgroundColor: currentSignal === signal ? signal : "gray",
            }}
          ></div>
        ))}
        {currentSignal && (
          <p className="text-xl font-bold">
            Current Signal: {currentSignal.toUpperCase()}
          </p>
        )}
      </div>
    </div>
  );
};

export default TrafficSignal;
