'use strict';
const countCategories = function () {
  const categoriesList = document.querySelector('#categories');
  const catagoryItem = categoriesList.querySelectorAll('li.item');
  console.log(`Number of categories: ${catagoryItem.length}`);
  catagoryItem.forEach(item => {
    const catagoryName = item.querySelector('h2').textContent;
    const subCategories = item.querySelectorAll('ul>li');
    console.log(`Category: ${catagoryName}`);
    console.log(`Elements: ${subCategories.length}`);
  });
};
countCategories();
