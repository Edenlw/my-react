import React from 'react';
import Header from "../../component/layout/Header";
export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    this.setState({
      disabled: false
    })
  }

  render() {
    return (
      <div>
        <Header />
        123
      </div>
    )
  }
};
