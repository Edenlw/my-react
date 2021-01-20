import React from "react";
const routers = [
  {
    path: "/",
    exact: true,
    component: React.lazy(()=>import('../pages/login/login.jsx' )),
  },
  {
    path: "/home",
    exact: true,
    component:  React.lazy(()=>import('../pages/home/home.jsx' )),
  },
  {
    path: "/about",
    exact: true,
    component:  React.lazy(()=>import('../pages/about/about.jsx' )),
  },
  {
    path: "/life",
    exact: true,
    component:  React.lazy(()=>import('../pages/life/life.jsx' )),
  },
  {
    path: "/blog",
    exact: true,
    component:  React.lazy(()=>import('../pages/blog/blog.jsx' )),
  }
]
export default routers;