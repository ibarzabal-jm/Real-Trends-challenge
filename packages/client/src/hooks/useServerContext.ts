import React from "react";

import ServerContext, {Context} from "~/context/ServerContext";

export function useInformation(): [Context["state"]["products"], Context["state"]["votes"]] {
  const {
    state: {products, votes},
  } = React.useContext(ServerContext);

  return [products, votes];
}

export function useSocket(): Context["socket"] {
  const {socket} = React.useContext(ServerContext);

  return socket;
}
