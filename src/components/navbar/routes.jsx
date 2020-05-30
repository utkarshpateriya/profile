import React from "react";
import Home from "../home";
import About from "../about";
import Contact from "../contact";

const routes = [
  {       
    path: "",
    exact: true,
    name: "Home",
    body: () => <Home />,
  },
  {
    path: "About",
    body: () => <About />,
  },
  {
    path: "Contact",
    body: () => <Contact />,
  },
]

export default routes;