import { Document, model, Schema } from "mongoose";

interface IEasyQuestion {
  questId: number;
  lottie: string;
  quest: string;
  answers: Array<{
    id: number;
    name: string;
    isCorrect: boolean;
  }>;
  description: string;
}

const EasyQuestionSchema = new Schema<IEasyQuestion & Document>({
  questId: { type: Number, required: true },
  lottie: { type: String, required: true },
  quest: { type: String, required: true },
  answers: { type: [{ id: Number, name: String, isCorrect: Boolean }], required: true },
  description: { type: String, required: true },
});

const EasyQuestionModel = model<IEasyQuestion & Document>("EasyQuestion", EasyQuestionSchema);

export default EasyQuestionModel;
export { IEasyQuestion };
