import EasyQuestionModel from "../models/EasyQuestionModel";
import HardQuestionModel from "../models/HardQuestionModel";

export namespace QuestionController {
  export async function findAllEasyQuestion(ignore?: Object) {
    return EasyQuestionModel.find({}, ignore);
  }

  export async function findAllHardQuestion(ignore?: Object) {
    return HardQuestionModel.find({}, ignore);
  }
}
