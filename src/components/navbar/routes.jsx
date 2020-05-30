import React from "react";
import Home from "../home";
import About from "../about";
import Contact from "../contact";

const routes = [
  {       
    path: "https://utkarshpateriya.github.io/profile/",
    exact: true,
    name: "profile",
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