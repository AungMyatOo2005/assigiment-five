import Todo from './Todo'
import Registration from './Registration';
import Temperature from './Temperature';
import Navbar from './Navbar'
import { useContext } from 'react';
import { UserContext } from './RegistrationContext';
function Main() {
  const { toggleResult } = useContext(UserContext);
    let Component;
    switch (window.location.pathname) {
      case "/":
        Component = <Todo/>;
        break;

      case "/todo":
        Component = <Todo />;
        break;
      case "/registration":
        Component = <Registration/>;
        break;
      case "/temperature":
        // eslint-disable-next-line no-unused-vars
        Component = <Temperature/>;
      // eslint-disable-next-line no-fallthrough
      // eslint-disable-next-line no-fallthrough
      default:
        break;
    }
  return (
    <div style={{ backgroundColor: toggleResult ? "#fcefee" : "rgb(43, 42, 42)" }}>
      <Navbar></Navbar>
      {Component}
    </div>
  );
}

export default Main