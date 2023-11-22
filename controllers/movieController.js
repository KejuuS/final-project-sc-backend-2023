import configModel from "../models/index.js";
const movieModel = configModel.movie;

/**
 * buatlah controller CRUD untuk model yang telah dibuat
 */

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns get All movies in database
 */
export const getAllMovies = async (req, res) => {
    try {
        const movie = await movieModel.find();
        return res.status(200).json({
            message: "Success",
            data: movie,
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns get spesific movie by id
 */
export const getMovieById = async (req, res) => {
    try {
        const movie = await movieModel.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        return res.status(200).json({
            message: "Success",
            data: movie,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns create new movie into database
 */
export const createMovie = async (req, res) => {
    const movieData = req.body;

    console.log("Incoming movie data:", movieData); // Add this line
    try {
        const newMovie = await movieModel.create(movieData);

        return res.status(201).json({
            message: "Success",
            data: newMovie, // Remove the toObject transformation
        });
    } catch (error) {
        return res.status(409).json({
            message: error.message,
        });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns update specific movie by ID
 */
export const updateMovie = async (req, res) => {
    try {
        const data = req.body;
        const movie = await movieModel.findById(req.params.id);
        if (movie) {
            movie.judul = data.judul;
            movie.sutradara = data.sutradara;
            movie.produser = data.produser;
            movie.tahunRilis = data.tahunRilis;
            movie.sinopsis = data.sinopsis;
            movie.genre = data.genre;
            const updateMovie = await movie.save();
            return res.status(200).json({
                message: "Success",
                data: updateMovie,
            });
        } else {
            return res.status(404).json({ message: "Movie not found" });
        }
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns delete specific Movie by ID
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
