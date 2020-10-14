let request = fetch('https://blog.softuni.org/wp-json/wp/v2/posts');
request.then(function(response) {
    response.json().then(function(posts) {
        console.log(posts);
        posts.forEach(function(post) {
            console.log(`${post.id}: ${post.title.rendered}`);
        });
    });
});
request.catch((err) => console.log(err));
