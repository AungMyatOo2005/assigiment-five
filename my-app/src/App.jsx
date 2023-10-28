import "./App.css";
import Main from "./components/Main";
import UserProvider from "./components/RegistrationContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Main />
      </UserProvider>
    </div>
  );
}

export default App;
