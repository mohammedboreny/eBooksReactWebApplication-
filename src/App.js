import react from "react";
import ReactDOM from "react-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Check from "./Components/Check";
import Promis from "./Components/promis";
import {
	Routes,
	Route,
	Link
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Promis/>
       {/* <Header />
      <Routes>
        <Route exact path='/home' element= {<Home/>}></Route>

      </Routes> */}
      {/* <Check/> */}
      {/* <Home/>
      <Footer /> */}
    </div>
  );
}

export default App;
