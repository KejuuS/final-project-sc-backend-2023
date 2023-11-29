import configDB from "../config/dbConfig.js";
import mongoose from "mongoose";
import { movieModel } from "./movie.js";

/**
 * Mendefinisikan model yang akan digunakan
 */
const configModel = {
    mongoose,
    url: configDB.url,
    movie: movieModel,
};

export default configModel;