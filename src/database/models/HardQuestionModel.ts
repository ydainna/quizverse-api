import { Document, model, Schema } from "mongoose";

interface IHardQuestion {
  questId: number;
  lottie: string;
  quest: string;
  answers: Array<{
    name: string;
    isCorrect: boolean;
  }>;
  description: string;
}

const HardQuestionSchema = new Schema<IHardQuestion & Document>({
  questId: { type: Number, required: true },
  lottie: { type: String, required: true },
  quest: { type: String, required: true },
  answers: { type: [{ name: String, isCorrect: Boolean }], required: true },
  description: { type: String, required: true },
});

const HardQuestionModel = model<IHardQuestion & Document>("HardQuestion", HardQuestionSchema);

export default HardQuestionModel;
export { IHardQuestion };
