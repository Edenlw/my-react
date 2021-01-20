import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import routes from './router/router.jsx';

import './App.css';

function App() {
  return (
    <Suspense fallback>
      <BrowserRouter>
        <Switch>
          {
          //遍历配置文件，生成路由列表
            routes.map((route,index)=>{
              return (
              //路由配置中的全部属性作为Route的属性
                <Route key={index} {...route} />
              )
            })
          }
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
