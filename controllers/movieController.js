import configModel from "../models/index.js";
const movieModel = configModel.movie;

/**
 * Controller CRUD untuk model yang telah dibuat
 */

/**
 * Mendapatkan semua film dalam database
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getAllMovies = async (req, res) => {
    try {
        const movie = await movieModel.find();
        return res.status(200).json({
            message: "Success",
            data: movie,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

/**
 * Mendapatkan film spesifik berdasarkan ID
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getMovieById = async (req, res) => {
    try {
        const movie = await movieModel.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({
                message: "Movie not found"
            });
        } return res.status(200).json({
            message: "Success",
            data: movie,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

/**
 * Membuat film baru dalam database
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const createMovie = async (req, res) => {
    const movieData = req.body;

    console.log("Incoming movie data:", movieData);
    try {
        const newMovie = await movieModel.create(movieData);

        return res.status(201).json({
            message: "Success",
            data: newMovie,
        });
    } catch (error) {
        return res.status(409).json({
            message: error.message,
        });
    }
};

/**
 * Mengupdate film berdasarkan ID
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const updateMovie = async (req, res) => {
    try {
        const data = req.body;
        const movie = await movieModel.findById(req.params.id);

        if (movie) {
            // Update only the fields that are present in the request body
            for (const key in data) {
                if (Object.hasOwnProperty.call(data, key)) {
                    movie[key] = data[key];
                }
            }

            const updatedMovie = await movie.save();

            return res.status(200).json({
                message: "Success",
                data: updatedMovie,
            });
        } else {
            return res.status(404).json({ message: "Movie not found" });
        }
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};


/**
 * Menghapus film berdasarkan ID
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const deleteMovie = async (req, res) => {
    try {
        const movie = await movieModel.findById(req.params.id);
        if (movie) {
            await movie.remove();
            return res.status(200).json({ message: "Movie deleted" });
        } else {
            return res.status(404).json({ message: "Movie not found" });
        }
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};
