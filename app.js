// Toggle-btn logic 
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links")
})

// ******************************************************** 

// price section logic

const bookmenu = [
  {
    id: 1,
    title: "Greenwild:The World Behind the Door",
    category: "children",
    price: 500,
    img: "./img/img-1.jpg",
    desc: `Open the door to a spellbinding world where the wilderness is alive and a deep magic rises from the earth itself . . .`,
  },
  {
    id: 2,
    title: "NCERT Math",
    category: "educational",
    price: 200,
    img: "./img/img-2.jpg",
    desc: `CBSE 20 Combined Sample Question papers Class 10 `,
  },
  {
    id: 3,
    title: "The Bee Sting",
    category: "fiction",
    price: 900,
    img: "./img/img-3.jpg",
    desc: `Paul Murray’s fourth novel is about the eeriness of transformative change.`,
  },
  {
    id: 4,
    title: "The Swifts: A Dictionary of Scoundrels",
    category: "children",
    price: 850,
    img: "./img/img-4.jpg",
    desc: `In her family, Shenanigan Swift has always been synonymous with mischief. As Arch-Aunt Schadenfreude always says `,
  },
  {
    id: 5,
    title: "The Lost Library",
    category: "children",
    price: 600,
    img: "./img/img-5.jpg",
    desc: `The New York Times bestselling authors of Bob, Rebecca Stead and Wendy Mass, introduce readers to a little free library `,
  },
  {
    id: 6,
    title: "NCERT English",
    category: "educational",
    price: 300,
    img: "./img/img-6.jpg",
    desc: `Fully Solved & Analysed• Score Boosting Insights with 500+Questions`,
  },
  {
    id: 7,
    title: "The Country of the Blind",
    category: "nonfiction",
    price: 1000,
    img: "./img/img-7.jpg",
    desc: `In this moving memoir, Andrew Leland recounts his journey from sight to blindness, tracing his ever-shifting relationship `,
  },
  {
    id: 8,
    title: "Single at Heart",
    category: "nonfiction",
    price: 1100,
    img: "./img/img-8.jpg",
    desc: `The Power, Freedom, and Heart-Filling Joy of Single Life  `,
  },
  {
    id: 9,
    title: "Outlive",
    category: "nonfiction",
    price: 700,
    img: "./img/img-9.jpg",
    desc: ` The Science and Art of Longevity`,
  },
  {
    id: 10,
    title: "A City on Mars",
    category: "educational",
    price: 850,
    img: "./img/img-10.jpg",
    desc: `Can We Settle Space, Should We Settle Space, and Have We Really Thought This Through?`,
  },
];

const btnContainer = document.querySelector("#btn-container");
const sectionCenter = document.querySelector(".section-center");

// loading content 

window.addEventListener("DOMContentLoaded",function(){
  displayBookMenu(bookmenu);
  displayCategoryBtns(bookmenu);
})

// creating bookmenuitems dynamically 

function displayBookMenu(array) {
  let displayBoard = array.map(function (bookdetails) {    
    return `<article class="menu-item">
  <div class="menu-item-img-container">
    <img src=${bookdetails.img} alt=${bookdetails.title} class="menu-item-img">
    <div class="price-info">
      <h4 class="price">${bookdetails.title}</h4>
      <h4 class="price">${"₹"+bookdetails.price}</h4>
      <div class="price-converter-container">
        <p class="converted-price-text">${"$"+priceConverterFunc(bookdetails.price)}</p>
        <p class="price-tag">Price in Dollar</p>
      </div>
    </div>
  </div>
  <div class="item-info">
    <p class="item-text">${bookdetails.desc}</p>
  </div>
  <button class="btn buy-btn">Buy now</button>
</article>     `
  })
  displayBoard = displayBoard.join("")
  sectionCenter.innerHTML = displayBoard;
}

// ********************************** 

function displayCategoryBtns(){
  const categories = bookmenu.reduce(function (value, item) {
    if (!value.includes(item.category)) {
      value.push(item.category);
    }
    return value;
  }, ["all"])
  const categoryBtns = categories.map(function (category) {
    return `<button class="filter-btn btn" type="button" data-id=${category}>${category}</button>`
  }).join("");
  btnContainer.innerHTML = categoryBtns;

  // Creating filter button  

  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const menuCategory = bookmenu.filter(function (menuItem) {
        // console.log(menuItem.category)
        if (menuItem.category === category) {
          return menuItem;
        }
      })
      // console.log(menuCategory)
      if (category === 'all') {
        displayBookMenu(bookmenu);
      } else {
        displayBookMenu(menuCategory);
      }
    })
  })
}


// ********************************************* 
// Rupees to dollar converting function 

// ************************************************ 


const priceConverterFunc = function(price){
  const oneDollar = 83.0345;
  let priceInDollar = price/oneDollar;
  priceInDollar = priceInDollar.toFixed(2);  
 return priceInDollar;
}





