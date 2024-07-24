import EasyScoreModel from "../models/EasyScoreModel";
import HardScoreModel from "../models/HardScoreModel";

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
      date: new Date()
        .toLocaleString("fr-FR", { timeZone: "Europe/Paris", hour12: false })
        .replace(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}:\d{2}:\d{2})/, "$3-$2-$1 $4"),
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
      date: new Date()
        .toLocaleString("fr-FR", { timeZone: "Europe/Paris", hour12: false })
        .replace(/(\d{2})\/(\d{2})\/(\d{4}), (\d{2}:\d{2}:\d{2})/, "$3-$2-$1 $4"),
    });
    await user.save();
  }
}
