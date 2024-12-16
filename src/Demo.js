import React, { useState } from "react";
import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Demo = () => {
  return (
    <div className="App">
      <Header />
      <main>
       <p>Click a link, above, to view Demo pages.</p>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;
