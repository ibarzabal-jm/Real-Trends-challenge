import React from "react";
import SocketIO from "socket.io-client";

import Loading from "~/app/screens/Loading";
import {Product} from "~/product/types";
import {Vote} from "~/votes/types";

interface State {
  products: Product[];
  votes: Vote[];
}

export interface Context {
  state: State;
  socket: SocketIO.Socket;
}

const ServerContext = React.createContext({} as Context);
const socket = SocketIO.io("http://localhost:5000");

const ServerProvider: React.FC = ({children}) => {
  const [state, setState] = React.useState<State>({products: [], votes: []});
  const [online, setOnline] = React.useState<true | false>(false);
  const [show, setShow] = React.useState<true | false>(false);

  React.useEffect(() => {
    socket.on("state", (state: State) => {
      setState(state), setOnline(socket.connected);
    });
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, []);

  if (!state || online === false || show === false) {
    return <Loading online={online} />;
  }

  return <ServerContext.Provider value={{socket, state}}>{children}</ServerContext.Provider>;
};

export {ServerContext as default, ServerProvider as Provider};
