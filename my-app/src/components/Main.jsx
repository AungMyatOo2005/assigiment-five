import Todo from './Todo'
import Registration from './Registration';
import Temperature from './Temperature';
import Navbar from './Navbar'
import { useContext } from 'react';
import { UserContext } from './RegistrationContext';
function Main() {
  const { toggle,pageName } = useContext(UserContext);
    let Component;
    switch (pageName) {
      case "":
        Component = <Todo/>
        break;

      case "todoPage":
        Component = <Todo />;
        break;
      case "registrationPage":
        Component = <Registration />;
        break;
      case "temperaturePage":
        // eslint-disable-next-line no-unused-vars
        Component = <Temperature />;
      // eslint-disable-next-line no-fallthrough
      // eslint-disable-next-line no-fallthrough
      default:
        break;
    }
  return (
    <div style={{ backgroundColor: toggle ? "#fcefee" : "rgb(43, 42, 42)" }}>
      <Navbar></Navbar>
      {Component}
    </div>
  );
}

export default Main