import React from 'react';
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
        123
      </div>
    )
  }
};
