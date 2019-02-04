import React from "react";

import {Route} from "react-router-dom";
import PlanetData from "./PlanetData";
import Loading from "./Loading";
import ErrorHandler from "./ErrorHandler";
import PlanetLinks from "./PlanetLinks";
import PlanetDetail from "./PlanetDetail";

function MainView() {
  return (
    <div>
      <PlanetData>
        {({loading, errMsg, planets}) => (
          <Loading loading = {loading}>
            <ErrorHandler errMsg = {errMsg}>
              <Route exact path="/" component={routeProps => (
                <PlanetLinks planets={planets}/>
              )} />
              <Route path="/planets/:index" component={routeProps => (
                <PlanetDetail {...routeProps.location.state.planet}/>
              )}/>
            </ErrorHandler>
          </Loading>
        )}
      </PlanetData>
    </div>
  )
}

export default MainView;
