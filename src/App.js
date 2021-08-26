import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";


const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Dog List"),

    React.createElement(Pet, {
      breadName: "Affenpinscher??",
      altbreedName: "None",
      loactionBelongs: "Global",
    }),
    React.createElement(Pet, {
      breadName: "Afghan Hound",
      altbreedName: "Tazi",
      loactionBelongs: "Afghanistan",
    }),
    React.createElement(Pet, {
      breadName: "Airedale Terrier",
      altbreedName: "King of Terriers,",
      loactionBelongs: "Aire Valley of Yorkshire",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
