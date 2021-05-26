window.addEventListener('load', function () {
  document.querySelector('body').classList.add('loaded');
});

const sidenav = document.querySelector('.sidenav');
const navbarIn = document.querySelector('#navbar');
const activeCat = document.querySelectorAll('.active-category');
const toggleBtn = document.querySelector('#toggle-btn');

// toggle navbar
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('nav-link')) {
    navbarIn.classList.remove('nav-active');
  }
});
toggleBtn.addEventListener('click', function (e) {
  navbarIn.classList.toggle('nav-active');
});

const navlinkHover = function (e) {
  if (e.target.classList.contains('nav-link')) {
    const link = e.target;
    const linkSib = link.closest('#navbar').querySelectorAll('.nav-link');

    linkSib.forEach(el => {
      if (el !== link) el.style.opacity = this;
      el.style.transition = `all .5s ease`;
    });
  }
};
navbarIn.addEventListener('mouseover', navlinkHover.bind(0.5));
navbarIn.addEventListener('mouseout', navlinkHover.bind(1));

// active class on scroll
const sections = document.querySelectorAll('.scroll');
function navLinkActive() {
  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const secHeight = current.offsetHeight;
    const secTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    const getNavLink = document.querySelector(
      `.navbarnav a[href*='${sectionId}']`
    );
    if (scrollY > secTop && scrollY <= secTop + secHeight) {
      getNavLink.classList.add('nav-link-active');
    } else {
      getNavLink.classList.remove('nav-link-active');
    }
  });
}
window.addEventListener('scroll', navLinkActive);

const sliderSec = document.querySelectorAll('.slide-in');
function sectionAnimation() {
  sliderSec.forEach(function (slider) {
    const sliderIn =
      window.scrollY + window.innerHeight - slider.clientHeight / 3;
    const secBottom = slider.clientHeight + slider.offsetTop;
    const secHalf = sliderIn > slider.offsetTop;
    const secScrollPast = window.scrollY < secBottom;
    if (secScrollPast && secHalf) {
      slider.classList.add('sec-active');
    }
  });
}
window.addEventListener('scroll', sectionAnimation);

//slick slider
$('.autoplay').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: '0px',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 1,
      },
    },
  ],
});

$('.test').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
  ],
});

$('.center').slick({
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
      },
    },
  ],
});
