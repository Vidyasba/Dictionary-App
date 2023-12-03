import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { BrowserRouter as Router, Routes, Route,Navigate  } from "react-router-dom";
import History from "./Components/History";
import WordDetails from "./Components/WordDetails"; 


const App = () => {
  return (
    <Router>
    <div>
      <Header />
      {/* <Body /> */}
      <Routes>
          <Route path="/" element={<Navigate to="/body" />} /> 
          <Route path="/body" element={<Body />} />
          <Route path="/history" element={<History />} />
          <Route path="/word/:word" element={<WordDetails />} />
        </Routes>
    </div>
  </Router>
  );
};
export default App;
