import React from "react";
import ReactDOM from "react-dom";

class FindDOMNode extends React.Component {
  constructor() {
    super();
    this.findDomMode = this.findDomMode.bind(this);
  }
  findDomMode() {
    var myDiv = document.getElementById("myDiv");
    // ReactDOM.findDOMNode("myDiv").style.color = "red";
    //document.getElementById("myDiv").style.color = "red";
    ReactDOM.findDOMNode(myDiv).style.color = "red";
    var nameId = document.getElementById("myName");
    ReactDOM.findDOMNode(nameId).style.color = "blue";

    alert("DivId" + myDiv + "Idval=>");
    alert("nameId=>" + nameId + "NameVal");
  }

  render() {
    return (
      <div>
        <h1>Find DOM Node</h1>
        <div id="myDiv">NODE</div>
        <div id="myName">NODE Name Value</div>
        <button onClick={this.findDomMode}> Change</button>
      </div>
    );
  }
}
export default FindDOMNode;
