import { Outlet } from "react-router-dom";
import Navigation from "./views/Navigation";

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
