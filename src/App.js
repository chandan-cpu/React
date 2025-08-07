import "./styles.css";
import TodoList from "./Components/usestatehooks";
import CounterAlert from "./Components/useEffectHookes";

export default function App() {
  return (
    <div className="App">
      <TodoList />
      <CounterAlert />
    </div>
  );
}
