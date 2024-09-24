import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Calculator from './Calculator';

const Home: React.FC = () => (
  <div>
    <h1>Welcome to the App</h1>
    <p>
      <Link to="/calculator">Go to Calculator</Link>
    </p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/calculator">Calculator</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
