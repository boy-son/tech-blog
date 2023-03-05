const newPost = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const content = document.querySelector('#content').value.trim();
    if (title && content) {
        const response = await fetch(`/api/blogPost`, {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newPost);