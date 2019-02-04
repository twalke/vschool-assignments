import React from "react";
import {render} from "react-dom";

import {BrowserRouter} from "react-dom";
import App from "./App";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root"),
)
