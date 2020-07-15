const header = document.querySelector(`.header`);
const kegs = document.querySelector(`.banner-img`);

window.addEventListener(`scroll`, () => {
  pageYOffset >= 530 ?
  header.classList.add(`header--scroll`) :
  header.classList.remove(`header--scroll`);
})








