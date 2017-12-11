const Cat = function(name, faveFood, url) {
  this.name = name;
  this.faveFood = faveFood;
  this.url = url;
};

Cat.prototype.add = function () {
  addCat(this);
};


let addCat = function (cat) {
  let cats = document.querySelector('#cats');
  let item = createCatList(cat);
  cats.appendChild(item);
}

let createCatList = function (cat) {
  let uList = document.createElement('ul');
  uList.classList.add('cat');
  uList.appendChild(catNameListItem(cat.name));
  uList.appendChild(catFaveFoodListItem(cat.faveFood));
  uList.appendChild(catImageListItem(cat.url));
  return uList;
}

let catNameListItem = function (name) {
  let catName = document.createElement('li');
  catName.innerText = "Name: " + name;
  return catName;
}

let catFaveFoodListItem = function (food) {
  let catFaveFood = document.createElement('li');
  catFaveFood.innerText = "Favourite food: " + food;
  return catFaveFood;
}

let catImageListItem = function (url) {
  let catUrl = document.createElement('li');
  let catImg = document.createElement('img');
  catImg.width = 500;
  catImg.src = url;
  catUrl.appendChild(catImg);
  return catUrl;
}


// seeds:

let cat1 = new Cat("Boba", "Sock Fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
let cat2 = new Cat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");
let cat3 = new Cat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");
let cat4 = new Cat("Cutiekins", "Mice and Voles", "https://www.rd.com/wp-content/uploads/2016/04/01-cat-wants-to-tell-you-laptop.jpg");
let cat5 = new Cat("Rorschach", "Souls", "https://metrouk2.files.wordpress.com/2017/10/523733805-e1508406361613.jpg");

let catArray = [];
catArray.push(cat1);
catArray.push(cat2);
catArray.push(cat3);

let app = function(array) {
  for (var i = 0; array.length; i++) {
    addCat(array[i]);
  }
}

let webList = function (name) {

}


window.onload = function() {
  cat1.add();
  cat2.add();
  cat3.add();
  cat4.add();
  cat5.add();
}
