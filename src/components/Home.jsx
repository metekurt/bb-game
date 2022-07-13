import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Home = () => {
  return (
    <div className="welcome-box">
      <div className="welcome-textt">
        <h1 className="uppercase welcome-text1">Brick Breaker game</h1>
        <h1 className="uppercase welcome-text2">
          Press button to start the game
        </h1>
      </div>
      <div className="welcome">
        <Link to="/game">
          <h1 className="text-center welcome-text uppercase font-bold transition-all duration-100  hover:text-yellow-500 px-6">
            Start Game!
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Home;
