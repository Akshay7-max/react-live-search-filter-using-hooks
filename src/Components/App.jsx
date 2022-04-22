import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;