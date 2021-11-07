const itemsBtn = document.querySelectorAll('.content__favorite-btn');
const favoriteList = document.querySelector('.favorite-modal__list');
const itemsBtnImgDisable = document.querySelectorAll('.content__favorite-img-disable');
const favoriteShowListBtn = document.querySelector('.favorite-btn');
const favorite = document.querySelector('.favorite');
const deleteBtn = document.querySelector('.favorite-modal__item-delete');
// console.log(itemsBtn);
// const warningBtn = document.querySelector('.favorite-modal__warning');
const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

let filmsList = []

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

const removeFilm = (filmParent) => {
    filmParent.remove();
}


itemsBtn.forEach(el => {
    el.closest('.content__link').setAttribute('data-id', randomId());
    el.addEventListener('click', (e) => {
        e.preventDefault();
        let itemsBtnImg = el.querySelector('.content__favorite-img');
        let itemsBtnImgDisable = el.querySelector('.content__favorite-img-disable');
        let self = e.currentTarget;
        let parent = self.closest('.content__link');
        let id = parent.dataset.id;
        let img = parent.querySelector('.content__img').getAttribute('src');
        let title = parent.querySelector('.content__title').textContent;
        let description = parent.querySelector('.content__description')
            .textContent
            .replace(/[\n\r]+|[\s]{2,}/g, ' ').trim()
            .slice(0, 120)
            + '...';
        let deleteBtn = document.querySelector('.favorite-modal__item-delete');

        filmsList.push({
            'id': id,
            'title': title,
            'description': description,
            'img': img
        })

        localStorage.setItem('films', JSON.stringify(filmsList))
        itemsBtnImg.style.display = (itemsBtnImg.style.display == 'none') ? 'block' : 'none';
        itemsBtnImgDisable.style.display = (itemsBtnImgDisable.style.display == 'block') ? 'none' : 'block';

        if (itemsBtnImgDisable.style.display == 'block') {
            favoriteList.insertAdjacentHTML('afterbegin', generateCartProduct(
                img,
                title,
                id,
                description));
            removeProduct(itemsBtnImgDisable, itemsBtnImg);
            console.log(favoriteList.childElementCount);
        }
        else {
            itemsBtnImgDisable.style.display = 'none';
            if (deleteBtn.classList.contains('favorite-modal__item-delete')) {
                removeFilm(deleteBtn.closest('.favorite-modal__item'));
                console.log(favoriteList.childElementCount);
            }
        }
    });
});




function removeProduct(arg, arg2) {
    favoriteList.addEventListener('click', (e) => {
        arg.style.display = 'none';
        arg2.style.display = 'block';
        if (e.target.classList.contains('favorite-modal__item-delete')) {
            e.target.style.transform = 'scale(0.8)'
            setTimeout(() => {
                removeFilm(e.target.closest('.favorite-modal__item'));
            }, 100);

        }
    })
}
// console.log(favoriteList);