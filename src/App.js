import "./App.css";
import { Box1, Box2, Box3, Box4, Box5 } from "./components/Box";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        height: "100%",
        margin: "auto",
      }}
    >
      <div className="Container">
        <Box1 color="red" />
        <Box2 color="blue" />
        <Box3 color="black" />
        <Box4 color="brown" />
        <Box5 color="yellow" />
      </div>
    </div>
  );
}

export default App;
