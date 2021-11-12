import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import Dashboard from "pages/Dashboard";
import Login from "pages/Login/Login";
import Register from "pages/registration/index";
import TCA from "pages/TCA/TCA";
import { app, site } from "../types/routes";
import Charity from "pages/Charity/Charity";
import Leaderboard from "pages/Leaderboard/Leaderboard";
import Withdraw from "pages/Withdraw/Withdraw";
import Marketplace from "pages/Marketplace/Marketplace";
import Test from "pages/Test";

export default function Views() {
  const { path } = useRouteMatch();
  const location = useLocation();
  return (
    <Switch>
      <Redirect from="/:url*(/+)" to={location.pathname.slice(0, -1)} />
      <Route path={`${path}/${app.dashboard}`} component={Dashboard} />
      <Route path={`${path}/${app.marketplace}`} component={Marketplace} />
      <Route path={`${path}/${app.charity}`} component={Charity} />
      <Route path={`${path}/${app.login}`} component={Login} />
      <Route path={`${path}/${app.register}`} component={Register} />
      <Route path={`${path}/${app.tca}`} component={TCA} />
      <Route path={`${path}/${app.test}`} component={Test} />
      <Route path={`${path}/${app.withdraw}/:address`} component={Withdraw} />
      <Route path={`${path}${app.index}`} component={Leaderboard} />
      <Redirect from="*" to={site.home} />
    </Switch>
  );
}