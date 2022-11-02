import { useEffect } from "preact/hooks";
import { useSignal, useComputed, effect } from "@preact/signals";

export default function Counter() {
  const COUNT_KEY = "COUNT";
  const count = useSignal<number>(parseInt(localStorage.getItem(COUNT_KEY) ?? "0"));
  const square = useComputed(() => count.value * count.value);
  const dispose = effect(() => {
      localStorage.setItem(COUNT_KEY, count.value.toString());
    });
  useEffect(() => {
    return () => {
      // free-up effect's memory
      dispose();
    };
  }, []);

  return (
    <div className="counter">
      <div className="home-link"><a href="/">Home</a></div>
      <div className="counter-title">Local State Demo</div>
      <h2>Count: {count.value}</h2>
      <h2>Count Squared: {square.value}</h2>
      <button onClick={() => count.value = count.value + 1}>Increment Count</button>
      <button onClick={() => {
        count.value = 0;
        localStorage.setItem(COUNT_KEY, "0");
        }}>Reset Count</button>
    </div>
  );
}