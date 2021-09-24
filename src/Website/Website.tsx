import { Switch, Route, useRouteMatch } from "react-router-dom";
import Home from "pages/Home/Home";
import About from "pages/About";
import Donors from "pages/Donors/Donors";
import PrivacyPolicy from "pages/PrivacyPolicy";
import Charities from "pages/Charities/Charities";
import WebHead from "components/Headers/WebHead";
import WebFoot from "components/Footers/WebFoot";
import { web } from "types/routes";

const Website = () => {
  const { path } = useRouteMatch();

  //path = '/' and nested route e.g 'for-charities' = '/for-charities'
  return (
    <div className={`grid grid-rows-1a bg-white`}>
      <WebHead />
      <Switch>
        {/* <Redirect from="/:url*(/+)" to={location.pathname.slice(0, -1)} /> */}
        <Route path={`${path}${web.about}`} component={About} />
        <Route path={`${path}${web.privacy}`} component={PrivacyPolicy} />
        <Route path={`${path}${web.donors}`} component={Donors} />
        <Route path={`${path}${web.charities}`} component={Charities} />
        <Route path={`${path}${web.index}`} component={Home} />
        {/* <Redirect from="*" to={routes.donate} /> */}
      </Switch>
      <WebFoot />
    </div>
  );
};

export default Website;
