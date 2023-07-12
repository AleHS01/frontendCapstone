import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import LoginMain from "./components/main-login.jsx";

import Payments from './components/payments.jsx';

import LinkPlaid from './components/LinkWithPlaid.jsx';


function App() {
  return (
    // <LoginMain></LoginMain>
    <Router>
      <Routes>
        <Route path="/" element={<LoginMain></LoginMain>}></Route>
        <Route path="/payments" element={<Payments></Payments>}></Route>
        <Route path = "/linkplaid" element = {<LinkPlaid></LinkPlaid>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
