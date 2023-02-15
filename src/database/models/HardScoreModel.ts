import { Document, model, Schema } from "mongoose";

interface IHardScore {
  userId: string;
  name: string;
  score: number;
  date: string;
}

const HardScoreSchema = new Schema<IHardScore & Document>({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  score: { type: Number, required: true },
  date: { type: String, required: true },
});

const HardScoreModel = model<IHardScore & Document>("HardScore", HardScoreSchema);

export default HardScoreModel;
export { IHardScore };
