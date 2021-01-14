import React from "react";
export default [
  {
    path: "/",
    exact: true,
    component: React.lazy(()=>import(/*webpackchunkname:login*/'../pages/login/login.jsx' ))
  },
  {
    path: "/home",
    component:  React.lazy(()=>import(/*webpackchunkname:home*/'../pages/home/home.jsx' ))
  },
]