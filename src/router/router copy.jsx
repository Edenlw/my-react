import React from "react";
const routers = [
  {
    path: "/",
    component: React.lazy(()=>import(/*webpackchunkname:login*/'../pages/login/login.jsx' )),
    childRoutes: [
      {
        path: "home",
        component:  React.lazy(()=>import(/*webpackchunkname:home*/'../pages/home/home.jsx' )),
      },
      {
        path: "about",
        component:  React.lazy(()=>import(/*webpackchunkname:about*/'../pages/about/about.jsx' )),
      },
      {
        path: "life",
        component:  React.lazy(()=>import(/*webpackchunkname:life*/'../pages/life/life.jsx' )),
      },
      {
        path: "blog",
        component:  React.lazy(()=>import(/*webpackchunkname:blog*/'../pages/blog/blog.jsx' )),
      }
    ]
  },
]
export default routers;