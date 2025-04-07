const search = () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', () => {
        searchButton.classList.toggle('fa-magnifying-glass');
        searchButton.classList.toggle('fa-xmark');
        searchInput.classList.toggle('none');
    });
};

export default search;