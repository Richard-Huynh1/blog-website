import express from "express";

const app = express();
const PORT = 3000;
var posts = [{ title: "Post 1", author: "Richard Huynh", date: "June 20, 2023", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ligula nisl, placerat eget interdum id, dictum at ligula. Sed condimentum ligula et libero congue varius. Suspendisse in pulvinar urna, et auctor nulla. Fusce id consequat elit. Curabitur diam mauris, egestas sit amet mattis sit amet, elementum sit amet enim. Sed imperdiet, neque sit amet ornare porttitor, diam nunc sollicitudin risus, in luctus ex metus eu urna. Sed efficitur id risus sed dapibus. Etiam imperdiet cursus felis, a commodo diam elementum congue. In elementum nibh a facilisis cursus. Donec finibus augue nec turpis blandit, eu aliquam mi aliquam. Aliquam laoreet nisi ac ex lobortis, eu convallis nulla aliquam. Vivamus pellentesque gravida orci. Nunc at sodales nibh, eu rhoncus purus. In feugiat rhoncus mi eget laoreet. In nisi elit, imperdiet quis fermentum quis, pulvinar sed leo." }, { title: "Post 2", author: "Richard Huynh", date: "June 23, 2023", content: "Text2" }];

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.get("/view-post", (req, res) => {
  const postIndex = req.query.post;
  res.render("view-post.ejs", { post: posts[postIndex] });
})

app.get("/create-posts", (req, res) => {
  res.render("create-posts.ejs", { posts: posts })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
