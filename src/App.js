import { AreaCalculator } from "./components/AreaCalculator";
import { AreaCanvas } from "./components/AreaCanvas";
import "./App.css";

function App() {
  return (
    <div className="constructor-page">
      <div className="title">
        <h2>Калькулятор конструктор</h2>
      </div>
      <div className="wrapper">
        <AreaCalculator />
        <AreaCanvas />
      </div>
    </div>
  );
}

export default App;
