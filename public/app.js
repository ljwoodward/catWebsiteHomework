const Cat = function(name, faveFood, url) {
  this.name = name;
  this.faveFood = faveFood;
  this.url = url;
};



const catsList = document.createElement('ul');

const addCat = function (item) {
  let cats = document.querySelector('#cats');
  cats.appendChild(item);
}

const createCatList = function (cat) {
  const uList = document.createElement('ul');
  uList.classList.add('cat');
  const catName = document.createElement('li');
  catName.innerText = cat.name;
  const catFaveFood = document.createElement('li');
  catFaveFood.innerText = cat.faveFood;
  const catUrl = document.createElement('li');
  const catImg = document.createElement('img');
  catImg.width = 500;
  catImg.src = cat.url;
  catUrl.appendChild(catImg);
  uList.appendChild(catName);
  uList.appendChild(catFaveFood);
  uList.appendChild(catUrl);
  return uList;
}
