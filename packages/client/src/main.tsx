import React from "react";
import ReactDOM from "react-dom";
import {ChakraProvider} from "@chakra-ui/react";

import {Provider as ServerProvider} from "~/context/ServerContext";

import Home from "./app/screens/Home/Home";

import "./theme.css";
import theme from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ServerProvider>
      <ChakraProvider resetCSS theme={theme}>
        <Home />
      </ChakraProvider>
    </ServerProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);
