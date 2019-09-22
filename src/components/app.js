import React from "react";
import Message from "./message";
import Form from "./Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "Test"
    };
  }
  handleNameChange = newName => {
    this.setState({ count: this.state.count + 1, name: newName });
  };

  render() {
    return (
      <React.Fragment>
      <div>
      <div>Name: {this.state.name}</div>
    <Form
    count={this.state.count}
    handleNameChange={this.handleNameChange}
    name={this.state.name}
    />
    <div># of Updates: {this.state.count}</div>
    </div>
    <Message />
    </React.Fragment>
  );
  }
}

export default App;
