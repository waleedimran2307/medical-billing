import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import SideContact from "./components/SideContact";

function App() {
  return (
    <>
      <div className="overflow-hidden relative">
        <Header />
        <SideContact />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
