import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
