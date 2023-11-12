import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListTiles from './Components/listTiles';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListDetail from './Components/listDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListTiles/>} />
        <Route path="/list-detail" element={<ListDetail/>} />

      </Routes>
    </Router>
  );
}

export default App;
