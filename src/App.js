import "./App.css";
import Navbar from "./components/Navbar";
function App() {
  const links = ["Services", "Projects", "About"];

  return (
    <div className="App d-flex">
        <Navbar links={links}/>
    </div>
  );
}





export default App;
