document.addEventListener("DOMContentLoaded", () => {
  /* fetchStores(); */
});

const fetchStores = (nProducts, sortBy) => {
  fetch(`http://localhost:5000/api/getStoresList?nStores=10&sortBy=name`)
    .then((response) => response.json())
    .then(({ data }) => {
      console.log(data);
    });
};
const menu = document.getElementsByClassName('mobile-nav')[0];
const openMenu = (icon) => {
  if (icon.classList.contains('open')) {
    icon.children[0].src = "/images/icons/menu.svg";
    icon.classList.remove('open');
    menu.classList.remove('show');
  } else {
    icon.children[0].src = "/images/icons/close.svg";
    icon.classList.add('open');
    menu.classList.add('show');
  }
}