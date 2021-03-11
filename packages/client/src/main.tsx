import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider} from "@chakra-ui/react";

import {Provider as ServerProvider} from "~/context/ServerContext";

import Home from "./app/screens/Home/Home";

import "./theme.css";

ReactDOM.render(
  <React.StrictMode>
    <ServerProvider>
      <ChakraProvider resetCSS>
        <Home />
      </ChakraProvider>
    </ServerProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
