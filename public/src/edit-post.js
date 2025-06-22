function updatePost() {
  const message = document.querySelector("h2");
  const textBox = document.querySelector("textarea");
  const newContent = textBox.value;
  fetch("/editing", {
    method: "POST",
    headers: {
      "Content-Type": "text/plain"
    },
    body: newContent
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status ${response.status}`);
    } else {
      message.innerHTML = "Successfully updated the post.";
    }
    return response.text();
  })
  .then(data => {
    console.log("Response from backend:", data);
  })
  .catch(error => {
    console.error("Error sending raw string:", error);
  })
}

function deletePost() {
  const message = document.querySelector("h2");
  fetch("/editing", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    message.innerHTML = "Successfully deleted post."
  })
  .catch(error => {
    console.error("Error deleteing resource:", error);
  });
}