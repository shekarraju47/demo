import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Form from "./Components/Userform/Form";
import Header from "./Components/Header/Header";

function App() {
  return (
    <BrowserRouter basename="/demo">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Form} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
