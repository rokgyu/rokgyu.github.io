document.addEventListener('DOMContentLoaded', function() {
    const filters = document.querySelectorAll('.filter');
    filters.forEach(filter => filter.addEventListener('change', filterPosts));

    function filterPosts() {
        const selectedFilters = Array.from(filters)
            .filter(filter => filter.checked)
            .map(filter => filter.value);

        const posts = document.querySelectorAll('.post');

        posts.forEach(post => {
            const postTags = post.dataset.tags.split(' ');
            if (selectedFilters.length === 0 || selectedFilters.every(tag => postTags.includes(tag))) {
                post.classList.remove('hidden');
            } else {
                post.classList.add('hidden');
            }
        });
    }
});
