import React from "react";
import styles from "./Header.scss";
import classnames from "classnames";
import { Link } from "react-router-dom";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { name: "首页", router: "home", id: 1 },
        { name: "日志", router: "blog", id: 2 },
        { name: "生活", router: "life", id: 3 },
        { name: "关于", router: "about", id: 4 },
      ],
      currentName: "首页",
    };
  }
  componentDidMount() {
    if(localStorage["currentName"] !== undefined) {
      this.setState({
        currentName: localStorage["currentName"],
      });
    }
  }
  navHandle(name) {
    localStorage.setItem("currentName", name);
    this.setState({
      currentName: name,
    });
  }
  render() {
    return (
        <div className={styles.header}>
        {this.state.list.map((item) => {
          return (
            <Link
              className={classnames(
                styles.nav,
                this.state.currentName === item.name ? styles.active : ""
              )}
              onClick={() => {this.navHandle(item.name)}}
              to={item.router}
              key={item.id}
            >
              {item.name}
            </Link>
          );
        })}
      </div>
    );
  }
}
