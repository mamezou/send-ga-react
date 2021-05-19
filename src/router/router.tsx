import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { useTracking } from "../hooks/useTracking";
import { Home } from "../components/pages/home";
import { About } from "../components/pages/about";

export const Router: VFC = memo(() => {
  useTracking("UA-********-*");
  useTracking("G-**********");

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="about/" component={About} />
      </Switch>
    </>
  );
});
