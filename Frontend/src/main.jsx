import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "./Rout/Rout";

import "./index.css"
import Authonicate from "./Component/Authonicate/Authonicate";
import HandleContext from "./Component/HandleContext/HandleContext";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HandleContext>
      <Authonicate>
        <RouterProvider router={Router} />
      </Authonicate>
    </HandleContext>

  </React.StrictMode>
);
