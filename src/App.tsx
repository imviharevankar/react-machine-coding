import "./App.css";
import Counter from "./components/Counter";
import { StarRating } from "./components";

function App() {
  return (
    <div className="wrapper">
      <Counter />
      <StarRating />
    </div>
  );
}

export default App;
