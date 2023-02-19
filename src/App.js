import React from "react";
import { Routes, Route } from "react-router-dom";
import Coinlist from "./components/Coinlist";
import Details from "./components/Details";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Coinlist />} />
        <Route path="/Coindetail/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
