const availabilityWarning = document.querySelector('.availability-warning')
const filmsContent = document.querySelector('.films-content')

if (localStorage.getItem('films')) {
    showMovies = true
    availabilityWarning.style.display = 'none'
}

const generateCartProduct = (img, title, id, description) => {
    return `
    <li class="favorite-modal__item" data-id="${id}">
        <img class="favorite-modal__item-img" src="${img}" alt="">
        <div class="favorite-modal-right">
         <h5 class="favorite-modal__item-title"> ${title}</h5>
            <p class="content__description" style="display:block">${description}</p>
        </div>
    <button class="favorite-modal__item-delete" aria-label="Удалить">
        <img class="favorite-modal__img" src="./images/trash.svg" alt="delete">
    </button>   
    </li>
	`;
};

function renderMovies(showMovies) {
    if (!showMovies) return

    const films = JSON.parse(localStorage.getItem('films'))

    films.forEach(film => {
        filmsContent.insertAdjacentHTML('afterbegin', generateCartProduct(
            film.img,
            film.title,
            film.id,
            film.description));
    });
    console.log(films);
}
renderMovies(showMovies)