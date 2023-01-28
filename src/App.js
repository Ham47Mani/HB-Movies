import {Fragment} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.scss';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SinglePage from "./components/watch/SinglePage";
import HomePage from "./home/HomePage";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/singlePage/:id" component={SinglePage}/>
        </Switch>
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
