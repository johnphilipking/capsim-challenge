import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route, useParams } from "react-router";
import Demo from "./Demo";
import Quiz from "./Quiz";
import Report from "./Report";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Demo />} />
      <Route path="/:testId" element={<Quiz />} />
      <Route path="/report/:reportId" element={<Report />} />
    </Routes>
  </BrowserRouter>
);
