import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
var posts = [];

app.use(bodyParser.urlencoded({ extender: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.get("/view-post", (req, res) => {
  const postIndex = req.query.post;
  res.render("view-post.ejs", { post: posts[postIndex] });
});

app.get("/create-posts", (req, res) => {
  res.render("create-posts.ejs");
});

function CreatePost(title, author, content) {
  this.title = title;
  this.author = author;
  this.date = new Date();
  this.content = content;
}

app.post("/create-posts", (req, res) => {
  posts.push(new CreatePost(req.body["title"], req.body["author"], req.body["content"]));
  res.render("create-posts.ejs");
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
