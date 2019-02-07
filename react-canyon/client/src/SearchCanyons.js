import React, { Component } from 'react';
import './App.css';

import {Route} from "react-router-dom";
import CanyonData from "./CanyonData";
import CanyonLinks from "./CanyonLinks";
import CanyonDetail from "./CanyonDetail";
import Loading from "./Loading";
import SearchHeader from "./SearchHeader"


class SearchCanyons extends Component {
  render() {
    return (
      <div className="SearchCanyons">

        <CanyonData>
          {({loading, errMsg, canyons}) => (
            <Loading loading = {loading}>
                <Route
                  exact path="/"
                  render={() =>
                    <div>
                      <SearchHeader />
                      <CanyonLinks canyons={canyons} />
                    </div>}
                />
                <Route path='/canyon/:id' component={CanyonDetail}/>
            </Loading>
          )}
        </CanyonData>

      </div>
    );
  }
}

export default SearchCanyons;
