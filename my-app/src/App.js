import "./App.css";
import Content from "./Components/Content";
import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Content style={{ textAlign: "center" }} />
    </div>
  );
}

export default App;
