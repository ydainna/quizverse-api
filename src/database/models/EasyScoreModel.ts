import { Document, model, Schema } from "mongoose";

interface IEasyScore {
  userId: string;
  name: string;
  score: number;
  date: string;
}

const EasyScoreSchema = new Schema<IEasyScore & Document>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: String, required: true },
});

const EasyScoreModel = model<IEasyScore & Document>("EasyScore", EasyScoreSchema);

export default EasyScoreModel;
export { IEasyScore };
