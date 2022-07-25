import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
       <Router>    
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
