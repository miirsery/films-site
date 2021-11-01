const itemsBtn = document.querySelectorAll('.content__favorite-btn');
const favoriteList = document.querySelector('.favorite-modal__list');
const itemsBtnImgDisable = document.querySelectorAll('.content__favorite-img-disable');
const favoriteShowListBtn = document.querySelector('.favorite-btn');
const favorite = document.querySelector('.favorite');
const deleteBtn = document.querySelector('.favorite-modal__item-delete');

const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const generateCartProduct = (img, title, id) => {
    return `
    <li class="favorite-modal__item" data-id="${id}>
    <div class="favorite-modal-left">
        <img class="favorite-modal__item-img" src="${img}" alt=""">
        <h5 class="favorite-modal__item-title"> ${title}</h5>
    </div>
    <button class="favorite-modal__item-delete" aria-label="Удалить">Удалить</button>
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
        let child = self.closest('.favorite-modal__item');
        let id = parent.dataset.id;
        let img = parent.querySelector('.content__img').getAttribute('src');
        let title = parent.querySelector('.content__title').textContent;




        itemsBtnImg.style.display = (itemsBtnImg.style.display == 'none') ? 'block' : 'none';
        itemsBtnImgDisable.style.display = (itemsBtnImgDisable.style.display == 'block') ? 'none' : 'block';
        if (itemsBtnImgDisable.style.display == 'block') {
            console.log('actove')
            favoriteList.insertAdjacentHTML('afterbegin', generateCartProduct(img, title, id));
            if (favoriteList.childElementCount >= 1)
                favoriteShowListBtn.style.pointerEvents = 'all';

        }
        else {
            console.log('Imagine that it`s deleted');
        }

    });
});


favoriteList.addEventListener('click', (e) => {
    if (e.target.classList.contains('favorite-modal__item-delete')) {
        console.log(e.target);
        removeFilm(e.target.closest('.favorite-modal__item'));

        if (favoriteList.childElementCount == 0)
            favoriteShowListBtn.style.pointerEvents = 'none';
    }
})