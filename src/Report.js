import React, { useState } from "react";
import { useParams } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./css/App.css";
import { scoresReportData } from "./services/data.js";
import BarChart from "./components/BarChart";

const Report = () => {
  /*
    the reportId is contained in the URL, for example http://localhost:3000/report/1
    the param passed is "1". This was defined in the Routes configured on index.js 
  */
  const { reportId } = useParams();

  /* fetch report data  (mocked data) */
  const scores = scoresReportData({ reportId }, "year");

  return (
    <div className="App">

      <Header />

      <main>
        <h2>Report For:  <span className="blue">Quiz {reportId}</span></h2>
        <div className="report-wrapper">
          <h3>Capsim Quiz Scores</h3>
          <BarChart data={scores.data} />
        </div>
      </main>

      <Footer />
      
    </div>
  );
};

export default Report;
