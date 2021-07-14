import './App.css';
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



function App() {
  return (
    <div className="App mt-5">
     <div className="row">   
      <div className="col-md-6">
        <div className="box">
        <form className="p-5">
        <h2>Login Now </h2>
          <img src="http://cdn.onlinewebfonts.com/svg/img_568657.png" width="100px;" height="100px;"/>
          <input type="text" placeholder="Username" className="form-control mt-3"/>
          <input type="password" placeholder="password" className="form-control mt-2 mb-3"/>
          <p><input type="checkbox"/> keep me signed in.</p>
          <button type="button" className="subtn">Login</button>
      </form>
      </div>
    </div>
    <div className="col-md-6">
        <div className="row mt-5">
          <div className="col-4 mt-5"><div className="c1"></div></div>
          <div className="col-4 mt-5"><div className="c2"></div></div>
          <div className="col-4 mt-5"><div className="c3"></div></div>
        </div>
    </div>
    </div>
    </div>
  );
}

export default App;
