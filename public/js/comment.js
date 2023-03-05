const commentFormHandler = async (event) => {
    event.preventDefault();
    const comment_text = document.querySelector('#comment-text').value.trim();
    const blogPost_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];
    if (comment_text && blogPost_id) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_text, blogPost_id }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
};
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);