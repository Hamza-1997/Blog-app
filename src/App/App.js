import "./App.css";
import Header from "../components/Header/Header";
import Feature from "../components/Featured/Feature";
import Articles from "../components/Articles/Articles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SingleBlog from "../components/SingleBlog/SingleBlog";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Feature />
            <Articles />
          </Route>
          <Route path="/singleBlog/:id" component={SingleBlog} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
