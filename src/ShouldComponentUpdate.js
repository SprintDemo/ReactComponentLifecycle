import React from "react";

class ShouldComponentUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "ShouldComponentUpdate method called" };
  }

  shouldComponentUpdate() {
    return false;
  }

  checkShouldUpdate = () => {
    this.setState({ name: "Changes done!!!" });
  };
  render() {
    return (
      <div>
        <h1>ShouldComponentUpdate Check</h1>
        <h3>{this.state.name}</h3>
        <button type="button" onClick={this.checkShouldUpdate}>
          Check
        </button>
      </div>
    );
  }
}
export default ShouldComponentUpdate;
