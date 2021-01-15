import React from 'react';
import styles from "./Header.scss";
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: [
        {name: "首页",id: 1},
        {name: "日志",id: 2},
        {name: "生活",id: 3},
        {name: "关于",id: 4},
      ],
      currentName: "首页"
    };
  }
  componentDidMount() {
    console.log(styles,"9");
  }
  navHandle(name) {
    // this.setState({
    //   currentName: name
    // })
    console.log(name,123);
  }
  render() {
    return (
      <div className={styles.header}>
        {
          this.state.list.map((item) => {
            return (
              <div className={styles.nav} style={{color:`${this.state.currentName === item.name ? 'blue' : ''}`}} onClick={this.navHandle(item.name)} key={item.id}>{item.name}</div>
            )
          })
        }
      </div>
    )
  }
};
