// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".faq-content").forEach(faqContainer => {

  faqContainer.addEventListener("click", (e) => {
  const groupHeader = e.target.closest(".faq-group-header");

  if (!groupHeader) return;

  const group = groupHeader.parentElement;
  const groupBody = group.querySelector(".faq-group-body");
  const icon = groupHeader.querySelector("i");

  const isOpen = groupBody.classList.contains("open");

    if (isOpen) {
      // Close the body with animation
      groupBody.style.maxHeight = 0;
      groupBody.classList.remove("open");
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    } else {
      // Open the body with scrollHeight
      groupBody.classList.add("open");
      groupBody.style.maxHeight = groupBody.scrollHeight + "px";
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    }
});  
});
});

// About Tab
const menulinks = document.getElementsByClassName("menu-links");
const faqcontents = document.getElementsByClassName("faq-content");

function openmenu(menuname, event){
    for(let menulink of menulinks){
    menulink.classList.remove("active");
    }
    for(let faqcontent of faqcontents){
    faqcontent.classList.remove("active-faq");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(menuname).classList.add("active-faq");
}

const all = ['general', 'gettingstarted'];

function openAll(event) {
    for(let menulink of menulinks){
        menulink.classList.remove("active");
    }
    for(let faqcontent of faqcontents){
        faqcontent.classList.remove("active-faq");
    }
    event.currentTarget.classList.add("active");
    
    all.forEach(id => {
        const section = document.getElementById(id);
        if(section) section.classList.add("active-faq");
    });
}

// Mobile Menu
document.addEventListener("DOMContentLoaded", () => {
  const hamburgerButton = document.querySelector(".hamburger-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  hamburgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  hamburgerButton.classList.toggle("fixed");
  });
});

// IMAGE SLIDER

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
  if(slides.length > 0){
    slides[slideIndex].classList.add("displaySlide");
   }
}
function showSlide(index){
    
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }
    
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}

// Search Bar
let availableKeywords = [
    { name: 'Home', url: 'index.html' },
    { name: 'Blog', url: 'getstarted.html' },
    { name: 'Contact Us', url: 'index.html#contact-us' },
    { name: 'Photo Gallery', url: 'aboutus.html#gallery' },
    { name: 'About Us', url: 'aboutus.html' }
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;

    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.name.toLowerCase().includes(input.toLowerCase());
        });
    }

    display(result);

    if(!result.length){
        resultsBox.innerHTML = '';
    }
}

function display(result){
    const content = result.map((item)=>{
        return `<li onclick="selectInput('${item.name}', '${item.url}')">${item.name}</li>`;
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

function selectInput(name, url){
    inputBox.value = '';
    resultsBox.innerHTML = '';
    window.location.href = url;
}

// Share Buttons
const link = window.location.href;
const msg = encodeURIComponent('Hey, I found this article');
const title = encodeURIComponent(document.querySelector('title').textContent);

console.log([link, msg, title]);

const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const twitter = document.querySelector('.twitter');
twitter.href = `http://www.twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

const reddit = document.querySelector('.reddit');
reddit.href = `http://www.reddit.com/submit?url=${link}&title=${title}`;

const whatsapp = document.querySelector('.whatsapp');
whatsapp.href = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${msg} ${link}`)}`;
