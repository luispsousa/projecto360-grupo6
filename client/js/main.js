document.addEventListener("DOMContentLoaded", () => {
  // Handler when the DOM is fully loaded~
  fetchStores();
});

const fetchStores = (nProducts, sortBy) => {
  fetch(`http://localhost:5000/api/getStoresList?nStores=100&sortBy=name`)
    .then((response) => response.json())
    .then(({ data }) => {
      console.log(data);
    });
};