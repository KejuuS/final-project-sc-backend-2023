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
router.get("/getAllMovie", getAllMovies);

router.get("/getMovieById/:id", getMovieById);

router.post("/createMovie", createMovie);

router.put("/updateMovie/:id", updateMovie);

router.delete("/deleteMovie/:id", deleteMovie);

export default router;
