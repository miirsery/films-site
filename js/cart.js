const itemsBtn = document.querySelectorAll('.content__favorite-btn');
const favoriteList = document.querySelector('.favorite-modal__list');
const favorite = document.querySelector('.favorite');

const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

const generateCartProduct = (img, title, id) => {
    return `
    <li class="favorite-modal__item">
    <div class="favorite-modal-left">
        <img class="favorite-modal__item-img" src="${img}" alt="" data-id="${id}">
        <h5 class="favorite-modal__item-title"> ${title}</h5>
    </div>
    <button class="favorite-modal__item-delete" aria-label="Удалить">Удалить</button>
</li>
	`;
};

itemsBtn.forEach(el => {
    el.closest('.content__link').setAttribute('data-id', randomId());
    el.addEventListener('click', (e) => {
        let self = e.currentTarget;
        let parent = self.closest('.content__link');
        let id = parent.dataset.id;
        let img = parent.querySelector('.content__img').getAttribute('src');
        let title = parent.querySelector('.content__title').textContent;

        favoriteList.insertAdjacentHTML('afterbegin', generateCartProduct(img, title, id));
        self.disabled;
    });
});