import React from "react";
import FindDOMNode from "./FindDOMNode";
import InitialPhase from "./InitialPhase";
import ShouldComponentUpdate from "./ShouldComponentUpdate";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.updateForceState = this.updateForceState.bind(this);
    this.state = {
      name: "kavitha",
      count: 1
    };
  }

  updateForceState(prevState) {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h3>Math Random : {Math.random()}</h3>
        <h3>Math Count : {this.state.count}</h3>
        <h2>Start editing to see some magic happen!</h2>
        <button onClick={this.updateForceState}>ForceUpdate</button>

        <FindDOMNode />
        <InitialPhase />
        <ShouldComponentUpdate />
      </div>
    );
  }
}

export default App;
