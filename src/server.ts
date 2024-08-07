import Hapi from "@hapi/hapi";
import { Server } from "@hapi/hapi";
import { Database } from "./database/mongo";
import { initQuestionsRoutes } from "./routes/questions";
import { initFilesRoutes } from "./routes/files";
import { initErrorRoutes } from "./routes/error";
import { initHomeRoutes } from "./routes/home";
import { initScoresRoutes } from "./routes/scores";
import { initContactRoutes } from "./routes/contact";
export let server: Server;

export const init = async (): Promise<Server> => {
  server = Hapi.server({
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });

  // Log internal uncaught errors
  server.ext("onPreResponse", (request, reply) => {
    const response = request.response;
    // @ts-expect-error - Hapi types are wrong
    if (response.isBoom) {
      console.log(response);
    }
    return reply.continue;
  });

  server.events.on("response", (request) => {
    //@ts-expect-error
    if (request.response && request.response.statusCode >= 400) {
      console.error(
        request.info.remoteAddress +
          ": " +
          request.method.toUpperCase() +
          " " +
          request.url.pathname +
          " --> " +
          //@ts-expect-error
          (request.response && request.response.statusCode)
      );
    } else {
      console.info(
        request.info.remoteAddress +
          ": " +
          request.method.toUpperCase() +
          " " +
          request.url.pathname +
          " --> " +
          //@ts-expect-error
          (request.response && request.response.statusCode)
      );
    }
  });

  await server.register(require("@hapi/inert"));
  await initQuestionsRoutes(server);
  await initFilesRoutes(server);
  await initErrorRoutes(server);
  await initHomeRoutes(server);
  await initScoresRoutes(server);
  await initContactRoutes(server);

  await Database.connect();

  return server;
};

export const start = async (): Promise<void> => {
  console.info(`Listening on ${server.settings.host}:${server.settings.port}`);
  return server.start();
};

process.on("unhandledRejection", (err) => {
  console.error(err);
  process.exit(1);
});
