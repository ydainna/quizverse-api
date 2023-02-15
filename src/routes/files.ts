import { Server } from "@hapi/hapi";
import { Constants } from "../utils/constants";

export const initFilesRoutes = async (server: Server) => {
  server.route({
    method: "GET",
    path: "/lottie/{_file}",
    handler: {
      directory: {
        path: Constants.PATH_LOTTIE,
      },
    },
  });

  server.route({
    method: "GET",
    path: "/images/{_file}",
    handler: {
      directory: {
        path: Constants.PATH_IMAGES,
      },
    },
  });
};
