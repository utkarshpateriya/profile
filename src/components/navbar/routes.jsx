import React from "react";
import Home from "../home";
import About from "../about";
import Contact from "../contact";

const routes = [
  {       
    path: "/profile",
    exact: true,
    name: "Home",
    body: () => <Home />,
  },
  {
    path: "/profile/About",
    name: "About",
    body: () => <About />,
  },
  {
    path: "/profile/Contact",
    name: "Contact",
    body: () => <Contact />,
  },
]

export default routes;