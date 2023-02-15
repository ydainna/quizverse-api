import ContactModel from "../models/ContactModel";
import moment from "moment-timezone";

import { v4 as uuidv4 } from "uuid";

export namespace ContactController {
  export async function findContactMessage(ignore?: Object) {
    return ContactModel.find({}, ignore);
  }

  export async function createContactMessage(name: string, mail: string, message: string) {
    const contact = new ContactModel({
      userId: uuidv4(),
      name,
      mail,
      message,
      date: moment().tz("Europe/Paris").format("YYYY-MM-DD HH:mm:ss"),
    });
    await contact.save();
  }
}
