import React, { useState } from "react";
import "../style/css/App.css";
import Nav from "../component/nav.bar";
import SocialMedia from "../component/socialMedia.js";
import ChatBot from "../component/chatBot.js";
import Skills from "../component/skillsCard.js";
import PersonalInfo from "../component/personalnfo.js";
import "minimatch";

const App = (props) => {
  const [value, setValue] = useState(false);
  let [showChat, setShowChat] = useState(false);
  const startChat = () => {
    setShowChat(true);
  };
  const hideChat = () => {
    setShowChat(false);
  };

  return (
    <div className="container">
      {/* {$(".container").scroll(function() {
          var y = $(this).scroll();
          if (y > 20) {
            // $("#element").fadeOut();
            console.log('11111111');
          } else {
            $("#element").fadeOut();
          }
        })} */}
      <Nav isOn={value} handleToggle={() => setValue(!value)} />
      <PersonalInfo id="PersonalInfo" />
      <SocialMedia className="socialMedia" />
      <div className="bot">
        <div style={{ display: showChat ? "" : "none" }}>
          <ChatBot id="ChatBot" />
        </div>
        <div>
          {!showChat ? (
            <button className="btn" onClick={() => startChat()}>
              <i className="fa fa-comments"></i>
            </button>
          ) : (
            <button className="btn" onClick={() => hideChat()}>
              <i class="fa fa-chevron-down"></i>
            </button>
          )}
        </div>
      </div>
      <div className="SkillsSection">
        <Skills />
      </div>
    </div>
  );
};

export default App;
