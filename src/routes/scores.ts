import { Request, ResponseToolkit, Server } from "@hapi/hapi";
import { ScoreController } from "../database/controllers/ScoreController";
import Joi from "joi";
import moment from "moment-timezone";
import { Constants } from "../utils/constants";

export const initScoresRoutes = async (server: Server) => {
  server.route({
    method: "GET",
    path: "/scores/easy",
    handler: async () => {
      // Get all easy score from the database
      const easyScore = await ScoreController.findAllEasyScore({ _id: 0, __v: 0 });
      // Sort by date
      easyScore.sort((a, b) => (moment(a.date, "YYYY-MM-DD HH:mm:ss").isBefore(moment(b.date, "YYYY-MM-DD HH:mm:ss")) ? 1 : -1));
      // Limit to 5
      return easyScore.slice(0, 5);
    },
  });

  server.route({
    method: "POST",
    path: "/scores/easy",
    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string().min(Constants.MIN_CHAR_PSEUDO).max(Constants.MAX_CHAR_PSEUDO).required(),
          score: Joi.number().integer().min(Constants.MIN_SCORE).max(Constants.MAX_SCORE).required(),
        }),
      },
    },
    handler: async (request: Request, h: ResponseToolkit) => {
      // Create easy score
      const payload: any = request.payload;
      await ScoreController.createEasyScore(payload.name, payload.score);
      // Return response 'success'
      const data = { status: "Success" };
      return h.response(data).code(200);
    },
  });

  server.route({
    method: "GET",
    path: "/scores/hard",
    handler: async () => {
      // Get all hard score from the database
      const hardScore = await ScoreController.findAllHardScore({ _id: 0, __v: 0 });
      // Sort by date
      hardScore.sort((a, b) => (moment(a.date, "YYYY-MM-DD HH:mm:ss").isBefore(moment(b.date, "YYYY-MM-DD HH:mm:ss")) ? 1 : -1));
      // Limit to 5
      return hardScore.slice(0, 5);
    },
  });

  server.route({
    method: "POST",
    path: "/scores/hard",
    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string().min(Constants.MIN_CHAR_PSEUDO).max(Constants.MAX_CHAR_PSEUDO).required(),
          score: Joi.number().integer().min(Constants.MIN_SCORE).max(Constants.MAX_SCORE).required(),
        }),
      },
    },
    handler: async (request: Request, h: ResponseToolkit) => {
      // Create hard score
      const payload: any = request.payload;
      await ScoreController.createHardScore(payload.name, payload.score);
      // Return response 'success'
      const data = { status: "Success" };
      return h.response(data).code(200);
    },
  });
};
