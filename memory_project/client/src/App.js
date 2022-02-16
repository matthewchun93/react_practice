import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// material UI components
import { Container } from "@material-ui/core";

// components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <Router>
      <Container maxwidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
