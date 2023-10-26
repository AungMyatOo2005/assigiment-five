import "./App.css";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import Temperature from "./components/Temperature";
import Todo from "./components/Todo";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <Todo />;
      break;

    case "/todo":
      Component = <Todo />;
      break;
    case "/registration":
      Component = <Registration />;
      break;
    case "/temperature":
      // eslint-disable-next-line no-unused-vars
      Component = <Temperature></Temperature>;
    // eslint-disable-next-line no-fallthrough
    // eslint-disable-next-line no-fallthrough
    default:
      break;
  }
  return (
    <div className="App">
      <Navbar></Navbar>
      {Component}
    </div>
  );
}

export default App;
