import React from 'react';
import { Button } from 'antd';
export default class App extends React.Component{

  constructor(props) {
    super(props);
    this.render = this.render.bind(this);
    this.state = {
      items: [
        {name: "院长主题",id: 1},
        {name: "门诊主题",id: 2},
        {name: "手术主题",id: 3},
        {name: "质控主题",id: 4}
      ],
      disabled: true
    };
  }

  componentDidMount() {
    this.setState({
      disabled: false
    })
  }

  handleClick() {
    this.setState({
      items: this.state.items.concat({name: 'Item ' + (Number(this.state.items.length) + 1) ,id: this.state.items.length + 2})
    })
  }

  render() {
    return (
      <div>
        <Button type="primary">Button</Button>
        <Button onClick={this.handleClick.bind(this)} disabled={this.state.disabled}>Add Item</Button>
        <ul>
        {
          this.state.items.map(function(item) {
            return <li key={item.id}>{item.id}{item.name}</li>
          })
        }
        </ul>
      </div>
    )
  }
};
