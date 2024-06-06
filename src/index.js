import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";

function Text() {
  const [movieRating, setMoviesRating] = useState(0);

  return (
    <div>
      {/* {" "}
      <StarRating
        color="green"
        size="88"
        maxRating={5}
        messages={["Terablel", "Bad", "Okay", "Good", "Amazing"]}
        onSetRating={setMoviesRating}
      />
      <p>This movie was rated {movieRating} stars</p> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terablel", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    /> */}
    <Text />
  </React.StrictMode>
);
