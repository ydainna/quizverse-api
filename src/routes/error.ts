import { Server } from "@hapi/hapi";
import { Constants } from "../utils/constants";

export const initErrorRoutes = async (server: Server) => {
  server.route({
    method: "*",
    path: "/{any*}",
    handler: function (_request, h) {
      return h.response(Constants.ERROR_ROUTE_MESSAGE).code(404);
    },
  });
};
