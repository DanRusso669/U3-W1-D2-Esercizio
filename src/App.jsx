import { Button } from "react-bootstrap";
import "./App.css";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <TopBar />
      <Welcome>
        <AllTheBooks />
      </Welcome>
      <Footer />
    </>
  );
}

export default App;
