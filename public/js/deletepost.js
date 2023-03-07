const deletePost = async (id) => {
    const response = await fetch(`/api/blogPost/${id}`, {
        method: 'DELETE',
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

document.querySelector('.delete-btn').addEventListener('click', deletePost);