const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => res.send("Hello, World!"));

const jobCreator = require('./routes/jobCreator')
app.use("/jobs", jobCreator)

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));