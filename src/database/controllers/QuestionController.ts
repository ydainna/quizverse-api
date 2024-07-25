import EasyQuestionModel from "../models/EasyQuestionModel";
import HardQuestionModel from "../models/HardQuestionModel";

export namespace QuestionController {
  //sql = "SELECT * FROM easy_questions
  export async function findAllEasyQuestion(ignore?: Object) {
    return EasyQuestionModel.find({}, ignore);
  }

  //sql = "SELECT * FROM hard_questions"
  export async function findAllHardQuestion(ignore?: Object) {
    return HardQuestionModel.find({}, ignore);
  }
}
