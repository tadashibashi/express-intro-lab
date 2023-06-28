// ===== imports ==============================================================
const express = require("express");
const path = require("path");
const students = require("./data/students");

// ===== constants ============================================================
const PORT = 3000;

// ===== app ==================================================================
const app = express();

// setup ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// setup static file service path. unused...
app.use("/public", express.static("public"));

// ===== routes ===============================================================

// Root
app.route("/")
    .get((req, res) => {
        res.render("index", {
            title: "Home"
        });
    });

// Students
app.route("/students")
    .get((req, res) => {
        res.render("students", {
            title: "Students",
            students,
        });
    });

// Blog
app.route("/blog")
    .get((req, res) => {
        res.render("blog", {
            title: "Blog"
        });
    });


app.listen(PORT, () => {
    console.log("Server listening at: http://localhost:" + PORT);
});