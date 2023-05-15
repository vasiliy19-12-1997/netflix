import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { Header } from "./Components/Elements/Header/header";
import Main from "./Components/Elements/Main/main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
      </div>
    </BrowserRouter>
  );
}

export { App };
