import express from "express";
import mongoose from "mongoose";
import configDB from "./config/dbConfig.js";
import router from "./routes/router.js";
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api", router);

// Connect to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect(configDB.url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err.message);
        process.exit(1);
    });

//connect to server
const port = 3000 || process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`)
);