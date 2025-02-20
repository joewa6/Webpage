document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');

    const posts = [
        { filename: 'POSTS/post1.html', date: '2024-01-01' },
        // Add more posts here
        //         { filename: 'POSTS/post2.html', date: '2024-02-01' },
        // { filename: 'POSTS/post3.html', date: '2024-03-01' },
    ];

    // Sort posts by date in descending order
    posts.sort((a, b) => new Date(b.date) - new Date(a.date));

    // Load and display posts
    posts.forEach(post => {
        fetch(post.filename)
            .then(response => response.text())
            .then(data => {
                const postElement = document.createElement('div');
                postElement.innerHTML = data;
                postsContainer.appendChild(postElement);
            })
            .catch(error => console.error('Error loading post:', error));
    });
});
