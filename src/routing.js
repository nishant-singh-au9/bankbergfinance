import { BrowserRouter, Route } from "react-router-dom";
import Store from "./store";
import { Provider } from "react-redux";
import Register from "./Component/User/register";
import DevPage from "./Component/DevPage/DevPage";
import Home from "./Component/Home/home";
import Dashboard from "./Component/Dashboard/dashboard";

const Routing = () => {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <Route exact path="/" component={DevPage} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </BrowserRouter>
    </Provider>
  );
};

export default Routing;
