import { Toaster } from "react-hot-toast";
import { Routes } from "./Routes";
import { Style } from "./styles";

function App() {
  return (
    <div className="App">
      <Style>
        <Routes />
        <Toaster />
      </Style>
    </div>
  );
}

export default App;
