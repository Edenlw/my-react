import React from 'react';

export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      disabled: false
    })
  }

  handleClick() {
    this.setState({
      items: this.state.items.concat('Item ' + this.state.items.length)
    })
  }

  render() {
    return (
      <div>

      </div>
    )
  }
};
