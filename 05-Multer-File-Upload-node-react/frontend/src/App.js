import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import AddData from './Screens/AddDocuments';
import ShowDocument from './Screens/ShowDocumnets';
import Home from './Screens/Home';
import {Route,Routes} from "react-router-dom";

function App() {
  return (
    <div >
      <div>
       
      </div>
      <div>
        
      <Routes>
        <Route exact path="/" element={<Home></Home>}></Route>
        <Route  path="/adddata" element={<AddData></AddData>}></Route>
        <Route  path="/showdata" element={<ShowDocument></ShowDocument>}></Route>
      </Routes>
      </div>
    </div>
  );
}

export default App;
