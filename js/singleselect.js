const dropdownBtn = document.querySelectorAll('.filters-main__item');
dropdownBtn.forEach(el => {
    el.addEventListener('click', (e) => {
        let dropdown = el.querySelector('.dropdown');
        dropdown.classList.toggle('dropdown-active');
    })
})