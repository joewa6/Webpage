document.addEventListener("DOMContentLoaded", async function() {
    const blogList = document.getElementById("blog-list");

    // Fetch the list of blog posts dynamically
    try {
        const response = await fetch("posts/posts.json");
        const posts = await response.json();

        posts.forEach(post => {
            const postCard = document.createElement("div");
            postCard.className = "blog-card";
            postCard.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.description}</p>
                <div class="blog-content">
                    <iframe src="posts/${post.filename}" width="100%" height="500px" frameborder="0"></iframe>
                </div>
            `;

            postCard.addEventListener("click", function() {
                this.classList.toggle("expanded");
            });

            blogList.appendChild(postCard);
        });
    } catch (error) {
        console.error("Error loading blog posts:", error);
    }
});
