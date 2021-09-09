import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";


const App = () => {
    return (
        <div>
            <h1>List of Dog</h1>
            <Pet name="Affenpinscher??" animal="None" breed="Global" />
            <Pet name="Afghan Hound??" animal="Tazi" breed="Afghanistan" />
            <Pet name="Airedale Terrier" animal="King of Terriers," breed="Aire Valley of Yorkshire" />
        </div>
    );
};
ReactDOM.render(<App />, document.getElementById("root"));
