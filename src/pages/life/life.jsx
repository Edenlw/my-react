import React from "react";
import Header from "../../component/layout/Header";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        life
      </div>
    )
  }
}