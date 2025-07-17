const express = require("express");
const cors = require("cors");
const videoRoutes = require("./routes/video");
const userRoutes = require("./routes/user"); // <— tambah ini

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:3000", // izinkan front‑end kamu
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: true, // jika butuh cookie/auth headers
    })
);

app.use("/videos", videoRoutes);
app.use("/users", userRoutes); // <— dan ini

const port = process.env.PORT || 4000;
app.listen(port, () =>
    console.log(`🚀 Server running at http://localhost:${port}`)
);
