import configDB from "../config/dbConfig.js";
import mongoose from "mongoose";
import { bookModel } from "./movie.js";

/**
 * definisikan model yang akan digunakan (berguna ketika ada beberapa model)
 */
const configModel = {
    mongoose,
    url: configDB.url,
    book: bookModel,
};

export default configModel;
