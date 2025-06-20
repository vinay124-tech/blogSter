import express from "express";
import bodyParser from "body-parser";
import path from "path";

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views folder (if it's not the default 'views' directory)
app.set('views', path.join(path.resolve(), 'views'));

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/home", (req, res) => {
    res.render("index.ejs");
});

app.get("/myblogs", (req, res) => {
    res.render("myblogs.ejs");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.get("/trending", (req, res) => {
    res.render("trending.ejs");
});

app.get("/start", (req, res) => {
    res.render("create.ejs")
});

app.get("/explore", (req, res) => {
    res.render("trending.ejs")
});

app.get("/login", (req, res) => {
    res.render("login.ejs")
});

app.get("/signUp", (req, res) => {
    res.render("signUp.ejs")
});

app.post("/Save", (req, res) => {
    
    const data = req.body.BLOG
    console.log(req.body)
    res.render("myblogs.ejs", {
        content : data,
    })
});

app.listen(port, () => {
    console.log(`Running at the port ${port}`);
});

