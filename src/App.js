import React from "react";
import "./app.css";
import Header from "./components/header";
import Keypad from "./components/keypad";
import Result from "./components/result";

class App extends React.Component {
  state = {
    result: 0,
    currentInput: "",
    previousInput: ""
  };

  render() {
    return (
      <div>
        <Header />
        <Result className="ui segment" displayValue={this.state.currentInput} />
        <label className=".grid-container">
          <Keypad
            handleClick={this.handleClick}
            submitResult={this.submitResult}
            clearResult={this.clearResult}
          />
        </label>
      </div>
    );
  }
  handleClick = event => {
    const newInput = event.target.name;
    this.setState(prevState => {
      return { currentInput: prevState.currentInput + newInput };
    });
  };
  submitResult = event => {
    event.preventDefault();
    localStorage.setItem("calculation", this.state.currentInput);
    this.setState({ currentInput: eval(this.state.currentInput) });
  };

  clearResult = event => {
    event.preventDefault();
    this.setState({ currentInput: " " });
  };
}

export default App;
