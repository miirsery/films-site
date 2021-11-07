import axios from 'axios'

const filmsList = document.querySelector('.content__items');
const favoriteList = document.querySelector('.favorite-modal__list');
// let filmsListArray = []

const getFilms = (img, title, id, description) => {
    return `
        <a class="content__link" href="#" data-id="${id}">
        <img class="content__img" src="${img}" alt="${title}">
        <button class="content__favorite-btn">
            <img class="content__favorite-img" src="http://127.0.0.1:8000/media/assets/heart-white.png" alt="heart">
            <img class="content__favorite-img-disable" src="http://127.0.0.1:8000/media/assets/heart-active.png" alt="heart">
        </button>
        <p class="content__description">
            Оставшиеся в живых члены команды Мстителей и их союзники должны разработать новый план,
            который поможет противостоять разрушительным действиям могущественного титана Таноса. После
            наиболее масштабной и трагической битвы в истории они не могут допустить ошибку.
        </p>
        <p class="content__title">${title}</p>
    </a>
	`;
};


const generateFilmsToFavorite = (img, title, description) => {
    return `
    <li class="favorite-modal__item" data-id="">

        <img class="favorite-modal__item-img" src="${img}" alt="">
        <div class="favorite-modal-right">
    <h5 class="favorite-modal__item-title"> ${title}</h5>
    <p class="content__description" style="display:block">${description}</p>
    </div>
    <button class="favorite-modal__item-delete" aria-label="Удалить">
        <img class="favorite-modal__img" src="http://127.0.0.1:8000/media/assets/trash.svg" alt="delete">
    </button>
   
    </li>
	`;
};
const removeFilm = (filmParent) => {
    filmParent.remove();
}

function renderFilms() {
    const itemsBtn = document.querySelectorAll('.content__favorite-btn');
    itemsBtn.forEach(el => {
        el.addEventListener('click', (e) => {
            console.log(filmsList);
            e.preventDefault()
            let itemsBtnImg = el.querySelector('.content__favorite-img');
            let itemsBtnImgDisable = el.querySelector('.content__favorite-img-disable');
            itemsBtnImg.style.display = (itemsBtnImg.style.display == 'none') ? 'block' : 'none';
            itemsBtnImgDisable.style.display = (itemsBtnImgDisable.style.display == 'block') ? 'none' : 'block';
    
            let self = e.currentTarget;
            let parent = self.closest('.content__link');
            let img = parent.querySelector('.content__img').getAttribute('src');
            let title = parent.querySelector('.content__title').textContent;
            let description = parent.querySelector('.content__description')
                .textContent
                .replace(/[\n\r]+|[\s]{2,}/g, ' ').trim()
                .slice(0, 120)
                + '...';
            let deleteBtn = document.querySelector('.favorite-modal__item-delete');
    
            // filmsListArray.push({
            //     'title': title,
            //     'description': description,
            //     'img': img
            // })
    
            // localStorage.setItem('films', JSON.stringify(filmsList))
    
            if (itemsBtnImgDisable.style.display == 'block') {
                favoriteList.insertAdjacentHTML('afterbegin', generateFilmsToFavorite(
                    img,
                    title,
                    description));
                removeProduct(itemsBtnImgDisable, itemsBtnImg);
            }
            else {
                itemsBtnImgDisable.style.display = 'none';
                if (deleteBtn.classList.contains('favorite-modal__item-delete')) {
                    removeFilm(deleteBtn.closest('.favorite-modal__item'));
                }
            }
        })
    })
}

function getCarts() {
    const carts = axios.get(
        "http://127.0.0.1:8000/api/films/"
    )
        .then(resp => {
            resp.data.forEach(film => {
                filmsList.insertAdjacentHTML('afterbegin', getFilms(
                    film.image,
                    film.title,
                    film.id,
                    film.description));
            });
            renderFilms()
        })
}

function removeProduct(film1, film2) {
    favoriteList.addEventListener('click', (e) => {
        film1.style.display = 'none';
        film2.style.display = 'block';
        if (e.target.classList.contains('favorite-modal__item-delete')) {
            e.target.style.transform = 'scale(0.8)'
            setTimeout(() => {
                removeFilm(e.target.closest('.favorite-modal__item'));
            }, 100);

        }
    })
}

getCarts()
