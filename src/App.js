import React from "react";
import "./styles/App.css";
const App = () => {
  return (
    <main>
      <header className="header">
        <a href="" className="logo">
          Insorts
        </a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>

      <div className="post">
        <div className="image">
          <img
            src="https://www.shutterstock.com/image-photo/patan-ancient-city-kathmandu-valley-260nw-551112193.jpg"
            alt="image"
          />
        </div>
        <div className="texts">
          <h2>
            Turkey halts trade with Israel over 'humanitarian tragedy' in Gaza
          </h2>
          <p className="info">
            <a className="author">Sudip Bhandari</a>
            <time>2024-1-2 45:23</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            voluptate provident ipsum quis iste animi nesciunt, obcaecati
            dolorem aut deserunt explicabo quae minus magni, sit assumenda
            necessitatibus! Voluptas, nesciunt! Autem!
          </p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img
            src="https://www.shutterstock.com/image-photo/patan-ancient-city-kathmandu-valley-260nw-551112193.jpg"
            alt="image"
          />
        </div>

        <div className="texts">
          <h2>
            Turkey halts trade with Israel over 'humanitarian tragedy' in Gaza
          </h2>

          <p className="info">
            <a className="author">Sudip Bhandari</a>
            <time>2024-1-2 45:23</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            voluptate provident ipsum quis iste animi nesciunt, obcaecati
            dolorem aut deserunt explicabo quae minus magni, sit assumenda
            necessitatibus! Voluptas, nesciunt! Autem!
          </p>
        </div>
      </div>
    </main>
  );
};

export default App;
