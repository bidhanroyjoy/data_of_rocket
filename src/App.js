import "./App.css";
import Header from "./components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { GetApiDataAction } from "./Redux/Action";
import { useEffect } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Header />

      <Home />
    </div>
  );
}

export default App;
