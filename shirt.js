const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

const cardsContainer = document.querySelector('.style-cards');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentPosition = 0;
const cardWidth = document.querySelector('.style-card').clientWidth; // Get width of one card
const numCards = document.querySelectorAll('.style-card').length; // Corrected selector for .style-card
const maxPosition = -(cardWidth * (numCards - 1));

function slideCards(direction) {
  if (direction === 'next' && currentPosition > maxPosition) {
    currentPosition -= cardWidth;
  } else if (direction === 'prev' && currentPosition < 0) {
    currentPosition += cardWidth;
  }
  cardsContainer.style.transform = `translateX(${currentPosition}px)`;
  checkBtn();
}
prevBtn.addEventListener('click', () => slideCards('prev'));
nextBtn.addEventListener('click', () => slideCards('next'));


document.addEventListener('DOMContentLoaded', function() {
  const chooseYourStyleButton = document.querySelector('.overButton');
  const navbar = document.querySelector('#nav');

  if (chooseYourStyleButton && navbar) {
      chooseYourStyleButton.addEventListener('click', function() {
          navbar.scrollIntoView({ behavior: 'smooth' });
      });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  // Get the slider element
  var slider = document.querySelector(".slider");

  // Get the main-card element
  var mainCard = document.querySelector(".main-card");

  // Add click event listener to slider
  slider.addEventListener("click", function() {
      // Scroll to the main-card element
      smoothScrollTo(mainCard);
  });

  // Function to scroll smoothly to an element
  function smoothScrollTo(element) {
      window.scrollTo({
          behavior: 'smooth',
          top: element.offsetTop
      });
  }
});
// Get the close button element
const closeButton = document.querySelector('.mail .close');

// Get the mail container element
const mailContainer = document.querySelector('.mail');

// Add click event listener to close button
closeButton.addEventListener('click', function() {
    mailContainer.style.display = 'none'; // Hide mail container
});