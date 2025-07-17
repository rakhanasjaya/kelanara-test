const express = require("express");
const videoRoutes = require("./routes/video");
const userRoutes = require("./routes/user"); // <— tambah ini

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/videos", videoRoutes);
app.use("/users", userRoutes); // <— dan ini

const port = process.env.PORT || 4000;
app.listen(port, () =>
    console.log(`🚀 Server running at http://localhost:${port}`)
);
