import React from "react";
const routers = [
  {
    path: "/login",
    exact: true,
    component: React.lazy(()=>import(/*webpackchunkname:login*/'../pages/login/login.jsx' ))
  },
  {
    path: "/",
    component:  React.lazy(()=>import(/*webpackchunkname:home*/'../pages/home/home.jsx' )),
  },
]
export default routers;