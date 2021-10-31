const favoriteBtn = document.querySelector('.favorite-btn');
const itemsBtn = document.querySelectorAll('.content__favorite-btn');
const cardproductList = document.querySelectorAll('.favorite-modal__list');
const favorite = document.querySelector('.favorite');
let img = element.querySelector('.favorite-modal__item-img');
favoriteBtn.addEventListener('click', (e) => {
    console.log(favoriteBtn.textContent);
});


const generateCartProduct = (img, title, price, id) => {
	return `
		<li class="cart-content__item">
			<article class="cart-content__product cart-product" data-id="${id}">
				<img src="${img}" alt="" class="cart-product__img">
				<div class="cart-product__text">
					<h3 class="cart-product__title">титле</h3>
					<span class="cart-product__price">999999</span>
				</div>
				<button class="cart-product__delete" aria-label="Удалить товар"></button>
			</article>
		</li>
	`;
};
