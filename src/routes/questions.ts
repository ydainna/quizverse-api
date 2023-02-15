import { Server } from "@hapi/hapi";
import { QuestionController } from "../database/controllers/QuestionController";

export const initQuestionsRoutes = async (server: Server) => {
  server.route({
    method: "GET",
    path: "/questions/easy",
    handler: async () => {
      // Get all easy questions from the database
      const easyQuestions = await QuestionController.findAllEasyQuestion({ _id: 0, __v: 0 });
      // Return the easyQuestions
      return easyQuestions;
    },
  });

  server.route({
    method: "GET",
    path: "/questions/hard",
    handler: async () => {
      // Get all hard questions from the database
      const hardQuestions = await QuestionController.findAllHardQuestion({ _id: 0, __v: 0 });
      // Return the hardQuestions
      return hardQuestions;
    },
  });
};
