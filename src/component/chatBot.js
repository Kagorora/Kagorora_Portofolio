import React, { Component } from "react";
import ChatBot from "react-simple-chatbot";
class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: "1",
            message: "Hey, I am Maxime assistant, What is your name?",
            trigger: "name",
          },
          {
            id: "name",
            user: true,
            trigger: "3",
          },
          {
            id: "3",
            message: "Hi {previousValue}! How can I help you?",
            trigger: "help",
          },
          {
            id: "help",
            user: true,
            trigger: "5",
          },
          {
            id: "5",
            message:
              "Maxime Kagorora is a software Engineer, who is passionate in building software that solves problems in our community",
            trigger: "contacts",
          },
          {
            id: "contacts",
            message: "Email: kagororamaxime@gmail.com, Tel: +250782299719",
            // trigger: "contacts",
          },
          {
            id: "end-message",
            message: "Thanks! Your data was submitted successfully!",
            end: true,
          },
        ]}
      />
    );
  }
}

export default SimpleForm;
