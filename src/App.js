/* global React ReactDOM*/
const Pet = (props) => {
  return React.createElement("div", { id: "dogList" }, [React.createElement("h2", { id: "DogBreed" }, props.breadName), React.createElement("h3", { id: "alternativeBreedId" }, props.altbreedName), React.createElement("h3", { id: "location" }, props.loactionBelongs),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Dog List"),

    React.createElement(Pet, {
      breadName: "Affenpinscher",
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
