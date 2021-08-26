import React from "react";

/*
const Pet = (props) => {
    return React.createElement("div", { id: "dogList" }, [React.createElement("h2", { id: "DogBreed" }, props.breadName), React.createElement("h3", { id: "alternativeBreedId" }, props.altbreedName), React.createElement("h3", { id: "location" }, props.loactionBelongs),
    ]);
};*/

const Pet = (props) => {
    return (
    <div id="dogList">
    <h2>{props.name}</h2>
    <h3>{props.animal}</h3>
    <h3>{props.breed}</h3>
    </div>
    );
};
export default Pet;
