import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
var postIndex;
var posts = [];
var message;

app.use(bodyParser.text({ type: "text/plain" }));
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

function Post(title, author, content) {
  this.title = title;
  this.author = author;
  this.date = new Date();
  this.content = content;
}

app.post("/create-posts", (req, res) => {
  posts.push(new Post(req.body["title"], req.body["author"], req.body["content"]));
  res.render("create-posts.ejs");
})

app.get("/edit-post", (req, res) => {
  res.render("edit-post.ejs");
})

app.get("/editing", (req, res) => {
  const title = req.query.title.trim().toLowerCase();
  postIndex = posts.findIndex(post => post.title.trim().toLowerCase() === title);
  if (postIndex === -1) {
    res.render("edit-post.ejs", { message: "Error: Post does not exist." });
  } else {
    res.render("edit-post.ejs", 
      {
        title: posts[postIndex].title,
        content: posts[postIndex].content,
        message: "Successfully retrieved the post."
      });
  }
});

app.post("/editing", (req, res) => {
  posts[postIndex].content = req.body;
  res.status(200).send(`Successfully recieved: "${req.body}"`);
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
