import { model, Schema } from "mongoose";
import modelOptions from "./model.options.js";

export default model(
  "Favorite",
  Schema(
    {
      user: { type: Schema.Types.ObjectId, ref: "User", required: true },
      mediaType: { type: String, enum: ["tv", "movie"], required: true },
      mediaId: { type: String, required: true },
      mediaTitle: { type: String, required: true },
      mediaPoster: { type: String, required: true },
      mediaRate: { type: String, required: true },
    },
    modelOptions
  )
);
