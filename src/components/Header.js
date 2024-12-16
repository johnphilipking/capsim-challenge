import React from "react";

const Header = () => {
  return (
    <header className="header">
      <h1>Capsim Challenge</h1>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/1">Load the Capsim Quiz</a>
          </li>
          <li>
            <a href="/report/1">View the Capsim Report</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
