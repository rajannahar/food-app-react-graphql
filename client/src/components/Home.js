import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="col">
      <Link to="/" className="text-secondary home-text" 
        style={{ 
          fontSize: "20px", 

        }}
      > 
        <i
          className="fas fa-home text-secondary"
          style={{
            fontSize: "28px",
            marginRight: "5px"
          }}
        />
        Home
      </Link>
    </div>
  );
};

export default Home;
