import "./App.css";
import Counter from "./components/Counter";
import {
  CoinToss,
  DataTable3,
  NestedCheckboxes,
  StarRating,
} from "./components";

function App() {
  return (
    <div className="wrapper">
      <Counter />
      <StarRating />
      <CoinToss />
      <NestedCheckboxes />
      <DataTable3 />
    </div>
  );
}

export default App;
