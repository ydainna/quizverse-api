import { Server } from "@hapi/hapi";
import { Constants } from "../utils/constants";

export const initHomeRoutes = async (server: Server) => {
  server.route({
    method: "*",
    path: "/",
    handler: function () {
      return Constants.HOME_ROUTE_MESSAGE;
    },
  });
};
