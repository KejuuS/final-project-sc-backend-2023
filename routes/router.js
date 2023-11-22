import express from "express";
import {
    createMovie,
    getAllMovies,
    getMovieById,
    updateMovie,
    deleteMovie,
} from "../controllers/movieController.js";
const router = express.Router();

/**
 * buatlah route CRUD untuk model yang telah dibuat dan diolah controller
 */
router.get("/", getAllMovies);

router.get("/movie/:id", getMovieById);

router.post("/movie", createMovie);

router.put("/movie/:id", updateMovie);

router.delete("/movie/:id", deleteMovie);

export default router;
