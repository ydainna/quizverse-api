import { Document, model, Schema } from "mongoose";

interface IContact {
  userId: string;
  name: string;
  mail: string;
  message: string;
  date: string;
}

const ContactSchema = new Schema<IContact & Document>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  mail: { type: String, required: true },
  message: { type: String, required: true },
  date: { type: String, required: true },
});

const ContactModel = model<IContact & Document>("Contact", ContactSchema);

export default ContactModel;
export { IContact };
