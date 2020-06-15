import React from "react";
import "../style/css/skillsCard.css";
import postgress from "../style/images/black-postgresql.png";
import redPostgres from "../style/images/red-Postgreqsl.png";
import express from "../style/images/express.png";
import redExpress from "../style/images/red-express.png";
import react from "../style/images/black-react.png";
import reactRed from "../style/images/react.png";
import Node from "../style/images/node.png";
import redNode from "../style/images/red-node.png";

const skills = () => {
  return (
    <div className="skillsContainer">
      <h1>STACK</h1>
      <div className="skillContainer">
        <div className="postgresCard">
          <img src={postgress} alt="user profile" id="posgresqlImg" className="avatar--small" />
          <img src={redPostgres} alt="user profile" id="redPosgresqlImg" className="avatar--small" />
          <h3>PostgreSQL</h3>
          <p>
            As an open source object-relational database, used to store data
          </p>
        </div>
        <div className="expressCard">
          <img src={express} alt="user profile" id="expressLogo" id="express" className="avatar--small" />
          <img src={redExpress} alt="user profile" id="expressLogo" id="redExpress" className="avatar--small" />
          <h3>EXPRESS</h3>
          <p> Express is a web application framework for Node.js</p>
        </div>
        <div className="reactCard">
          <img src={react} alt="user profile" id="react" className="avatar--small" />
          <img src={reactRed} alt="user profile" id="redReact" className="avatar--small" />
          <h3>React</h3>
          <p>
            React is an open-source JavaScript library for building user
            interfaces
          </p>
        </div>
        <div className="nodeCard">
          <img src={Node} alt="user profile" id="Node" className="avatar--small" />
          <img src={redNode} alt="user profile" id="redNode" className="avatar--small" />
          <h3>Node</h3>
          <p>
            Node.js platform that executes JavaScript code outside a web
            browser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default skills;
