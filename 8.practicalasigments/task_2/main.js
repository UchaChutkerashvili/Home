fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) => {
          // Get the posts container element
          const postsContainer = document.getElementById("posts-container");

          // Iterate over the posts and create HTML elements
          posts.forEach((post) => {
            // Create a post container
            const postContainer = document.createElement("div");
            postContainer.classList.add("post");

            // Create a post title
            const postTitle = document.createElement("h2");
            postTitle.classList.add("post-title");
            postTitle.textContent = post.title;

            // Create a post body
            const postBody = document.createElement("p");
            postBody.classList.add("post-body");
            postBody.textContent = post.body;

            // Append title and body to the post container
            postContainer.appendChild(postTitle);
            postContainer.appendChild(postBody);

            // Append the post container to the posts container
            postsContainer.appendChild(postContainer);
          });
        })
        .catch((error) => {
          console.log("Error fetching posts:", error);
        });