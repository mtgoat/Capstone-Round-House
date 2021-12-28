import React from 'react';
import ReactDOM from 'react-dom';
import { BrowerRouter as Router} from "react-router-dom";
import './index.css';
import { RoundHouse } from "./RoundHouse";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <RoundHouse />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


