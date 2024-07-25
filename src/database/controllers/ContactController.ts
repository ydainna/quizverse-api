import ContactModel from "../models/ContactModel";

import { v4 as uuidv4 } from "uuid";

export namespace ContactController {
  //sql = "SELECT * FROM contact"
  export async function findContactMessage(ignore?: Object) {
    return ContactModel.find({}, ignore);
  }

  //sql = "INSERT INTO contact (userId, name, mail, message, date) VALUES (?, ?, ?, ?, ?)"
  export async function createContactMessage(name: string, mail: string, message: string) {
    const contact = new ContactModel({
      userId: uuidv4(),
      name,
      mail,
      message,
      date: new Date()
        .toLocaleString("fr-FR", { timeZone: "Europe/Paris", hour12: false })
        .replace(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}:\d{2}:\d{2})/, "$3-$2-$1 $4"),
    });
    await contact.save();
  }
}
