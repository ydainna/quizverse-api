import EasyScoreModel from "../models/EasyScoreModel";
import HardScoreModel from "../models/HardScoreModel";
import moment from "moment-timezone";

import { v4 as uuidv4 } from "uuid";

export namespace ScoreController {
  export async function findAllEasyScore(ignore?: Object) {
    return EasyScoreModel.find({}, ignore);
  }

  export async function createEasyScore(name: string, score: number) {
    const user = new EasyScoreModel({
      userId: uuidv4(),
      name,
      score,
      date: moment().tz("Europe/Paris").format("YYYY-MM-DD HH:mm:ss"),
    });
    await user.save();
  }

  export async function findAllHardScore(ignore?: Object) {
    return HardScoreModel.find({}, ignore);
  }

  export async function createHardScore(name: string, score: number) {
    const user = new HardScoreModel({
      userId: uuidv4(),
      name,
      score,
      date: moment().tz("Europe/Paris").format("YYYY-MM-DD HH:mm:ss"),
    });
    await user.save();
  }
}
