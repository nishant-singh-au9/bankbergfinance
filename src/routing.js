import { BrowserRouter, Route } from "react-router-dom";
import Store from "./store";
import { Provider } from "react-redux";
import Login from "./Component/User/login";
import Register from "./Component/User/register";
import Home from "./Component/Home/home";

const Routing = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </BrowserRouter>
    </Provider>
  );
};

export default Routing;
