import mongoose from "mongoose";

const movieSchema = mongoose.Schema(
    {
        judul: String,
        sutradara: String,
        produser: String,
        tahunRilis: Number,
        sinopsis: String,
        genre: String,
    },
    {
        timestamps: true,
    }
);
// Mengambil nilai id yang di set otomatis oleh mongodb
movieSchema.methods.toJSON = function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
};
export const movieModel = mongoose.model("movieModel", movieSchema);