import { Request, ResponseToolkit, Server } from "@hapi/hapi";
import { ContactController } from "../database/controllers/ContactController";
import Joi from "joi";

export const initContactRoutes = async (server: Server) => {
  server.route({
    method: "GET",
    path: "/contact",
    handler: async () => {
      // Get all contact message from the database
      const contact = await ContactController.findContactMessage({ _id: 0, __v: 0 });
      return contact;
    },
  });

  server.route({
    method: "POST",
    path: "/contact",
    options: {
      validate: {
        payload: Joi.object({
          name: Joi.string().required(),
          mail: Joi.string().required(),
          message: Joi.string().required(),
        }),
      },
    },
    handler: async (request: Request, h: ResponseToolkit) => {
      // Create contact message
      const payload: any = request.payload;
      await ContactController.createContactMessage(payload.name, payload.mail, payload.message);
      // Return response 'success'
      const data = { status: "Success" };
      return h.response(data).code(200);
    },
  });
};
