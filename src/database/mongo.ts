import mongoose from "mongoose";

export namespace Database {
  export async function connect(): Promise<typeof mongoose> {
    mongoose.connection.on("connecting", () => {
      console.info("Connecting...");
    });

    mongoose.connection.on("reconnecting", () => {
      console.warn("Reconnecting...");
    });

    mongoose.connection.on("connected", () => {
      console.info("Connected!");
    });

    mongoose.connection.on("reconnected", () => {
      console.info("Reconnected!");
    });

    mongoose.connection.on("disconnected", () => {
      console.error("Disconnected!");
    });

    mongoose.set("strictQuery", true);
    return mongoose.connect(process.env.MONGODB_URL as string);
  }
}
