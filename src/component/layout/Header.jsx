import React from 'react';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        {name: "首页",id: 1},
        {name: "日志",id: 2},
        {name: "生活",id: 3},
        {name: "关于",id: 4},
      ]
    };
  }
  componentDidMount() {

  }
  navHandle(e) {
    console.log(e,123);
  }
  render() {
    return (
      <div style={{height:"60px",borderBottom:"1px solid #f1f1f1",display:"flex",justifyContent:"center",alignItems:"center"}}>
        {
          this.state.list.map((item) => {
            return (
              <div className="nav" onClick={this.navHandle} style={{width:"68px",cursor:"pointer"}} key={item.id}>{item.name}</div>
            )
          })
        }
      </div>
    )
  }
};
