import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import routes from "./Controllers/URLs/routes";
import withTracker from "./withTracker";

const App = (props) => {
  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
    <div>
      {routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={withTracker((props) => {
              return (
                <route.layout {...props}>
                  <route.component {...props} />
                </route.layout>
              );
            })}
          />
        );
      })}
    </div>
  </Router>
  )
};

export default App;
