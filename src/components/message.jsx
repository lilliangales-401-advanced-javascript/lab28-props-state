import React from "react";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello World"
    };
  }
  render() {
    return (
      <React.Fragment>
      <div>{this.state.text}</div>
      </React.Fragment>
  );
  }
}

export default Message;
