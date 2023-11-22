import configDB from "../config/dbConfig.js";
import mongoose from "mongoose";
import { movieModel } from "./movie.js";

/**
 * definisikan model yang akan digunakan (berguna ketika ada beberapa model)
 */
const configModel = {
    mongoose,
    url: configDB.url,
    movie: movieModel,
};

export default configModel;
