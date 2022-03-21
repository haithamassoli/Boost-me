import { Mongoose } from "mongoose";

const DB_URL = process.env.MONGO_URL;

const gameSchema = new Mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  category: [String],
  currentDivision: [String],
  desiredDivision: [String],
});

const Game = Mongoose.model("game", gameSchema);
