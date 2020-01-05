const sliderCardImages = document.querySelectorAll('.animated');
const regionDiv = document.querySelector('.region');

const offset = (el) =>{
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

const offSetDivRegion = (offset(regionDiv));
// console.log(offSetDiv.top);
// console.log(sliderCards);

const sliding = (event) => {
  //position of the bottom of the browser
  // const botomLine = window.scrollY + window.innerHeight;

  sliderCardImages.forEach(cardImage => {
    // console.log(window.scrollY+window.innerHeight);
    // console.log(cardImage.height/2);
    // console.log(cardImage.height);
    const slideInAt = (window.scrollY + window.innerHeight) - cardImage.height/2;
    // const imageBottom = cardImage.offsetTop + cardImage.height;
    // const isHalfShown = slideInAt
    // console.log(imageBottom);
    // console.log(slideInAt);
    // console.log(isHalfShown);
    if(offSetDivRegion.top < slideInAt){
      cardImage.classList.add('slideInUp');
    }

  })
}

window.addEventListener('scroll', sliding);