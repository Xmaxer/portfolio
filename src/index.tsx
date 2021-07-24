import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GA4React from "ga-4-react";

const ga4react = new GA4React(process.env.REACT_APP_GA_MEASUREMENT_ID ?? "");

(async () => {
  try {
    console.log("Using: ", process.env.REACT_APP_GA_MEASUREMENT_ID);
    await ga4react.initialize();
  } catch (e) {
    console.warn("Failed to start tracking. Ad blocker perhaps?");
  }

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
