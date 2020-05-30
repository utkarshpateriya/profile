import React from "react";
import "./styles.scss";
import Navbar from "./components/navbar/navbar";
import Body from "./components/body/body"

export default function App() {
  return (
    <div className="App">
    <Navbar />
    <Body />
    </div>
  );
}
