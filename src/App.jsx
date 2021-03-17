import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AyaBrackett } from "./routes/AyaBrackett";
// import { Header } from "./routes/Header";

// Components
// const Home = lazy(() => import("./components/Home"));
import Home from "./routes/Home";
import { PlateTracker } from "./routes/PlateTracker";
import { TradingPlatforms } from "./routes/TradingPlatforms";

const App = () => {
  console.log(
    `%c  _    _ _____ _____  ______   __  __ ______ _ 
 | |  | |_   _|  __ \\|  ____| |  \\/  |  ____| |
 | |__| | | | | |__) | |__    | \\  / | |__  | |
 |  __  | | | |  _  /|  __|   | |\\/| |  __| | |
 | |  | |_| |_| | \\ \\| |____  | |  | | |____|_|
 |_|  |_|_____|_|  \\_\\______| |_|  |_|______(_)                                            
 `,
    "font-family:monospace"
  );
  return (
    <React.StrictMode>
      <div className="App">
        <Router>
          {/* <Header /> */}
          {/* <Suspense fallback={<h1>loading ...</h1>}> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/plate-tracker">
              <PlateTracker />
            </Route>
            <Route exact path="/trading-platforms">
              <TradingPlatforms />
            </Route>
            <Route exact path="/aya-brackett">
              <AyaBrackett />
            </Route>
          </Switch>
          {/* </Suspense> */}
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
