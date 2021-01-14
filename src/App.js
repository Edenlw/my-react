import React, { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import routes from './router/router.jsx'
console.log(routes,"jj");
function App() {
  return (
    <Suspense fallback={<div></div>}>
      <BrowserRouter>
        {
        //遍历配置文件，生成路由列表
          routes.map((route,index)=>{
            return (
            //路由配置中的全部属性作为Route的属性
              <Route key={index} {...route} />
            )
          })
        }
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
