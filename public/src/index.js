const btn = document.querySelector(".btn");
const posts = document.getElementById("posts");

btn.addEventListener("click", function() {
  if (posts.style.display === "none") {
    posts.style.display = "flex";
    this.innerHTML = "Hide All Posts";
  } else {
    posts.style.display = "none";
    this.innerHTML = "View All Posts";
  }
})