import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Head from "./Head";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Head} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default Routes;
