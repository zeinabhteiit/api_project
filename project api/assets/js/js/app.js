// Fetching data for the Comments Overview Page (index.html)
if (document.getElementById("comments-container")) {
    document.addEventListener("DOMContentLoaded", () => {
        const commentsContainer = document.getElementById("comments-container");

        // Fetching comments from JSONPlaceholder API
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((response) => response.json())
            .then((comments) => {
                comments.forEach((comment) => {
                    const commentElement = document.createElement("div");
                    commentElement.classList.add("comment");
                    commentElement.innerHTML = `
                        <h2><a href="detail.html?id=${comment.id}">${comment.name}</a></h2>
                        <p>${comment.body.slice(0, 100)}...</p>
                        <p><strong>Email:</strong> ${comment.email}</p>
                    `;
                    commentsContainer.appendChild(commentElement);
                });
            })
            .catch((error) => console.error("Error fetching comments:", error));
    });
}

// Fetching detailed data for the Comment Details Page (detail.html)
if (document.getElementById("comment-details")) {
    document.addEventListener("DOMContentLoaded", () => {
        const commentId = new URLSearchParams(window.location.search).get("id");
        const commentDetailsContainer = document.getElementById("comment-details");

        // Fetching comment details based on comment ID from the URL
        fetch(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
            .then((response) => response.json())
            .then((comment) => {
                commentDetailsContainer.innerHTML = `
                     
                    <h1>${comment.name}</h1>
                    <p>${comment.body}</p>
                `;
            })
            .catch((error) => console.error("Error fetching comment details:", error));
    });
}
