import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
    {
        // example schema definition for a movie
        judul: String,
        sutradara: String,
        produser: String,
        tahunRilis: Number,
        sinopsis: String,
        genre: String,
    },
    {
        timeStamps: true,
    }
);
//mengambil nilai id yang di set otomatis oleh mongodb
movieSchema.methods.toJSON = function () {
    const { _id, ...object } = this.toObject();
    object.id = _id;
    return object;
};
export const movieModel = mongoose.model("movieModel", movieSchema);
