import './style.css';

const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  grabCursor: true,
  loop: true,
});

const mobileMenuIcon = document.querySelector('.mobile-menu-icon');

const mobileNavigation = document.querySelector('.mobile-navigation');

mobileMenuIcon.addEventListener('click', () => {
  if (mobileMenuIcon.classList.contains('fa-bars')) {
    mobileMenuIcon.classList.add('fa-close');
    mobileMenuIcon.classList.remove('fa-bars');
    mobileNavigation.classList.toggle('hidden');
  } else {
    mobileMenuIcon.classList.remove('fa-close');
    mobileMenuIcon.classList.add('fa-bars');
    mobileNavigation.classList.toggle('hidden');
  }
});

document.addEventListener('scroll', () => {
  const navigationBar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navigationBar.classList.add('scrolled');
  } else {
    navigationBar.classList.remove('scrolled');
  }
});

const typed = document.querySelector('.typed');
     
if(typed) {
  let typed_strings = typed.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',');
 new Typed('.typed', {
  strings: typed_strings,
  loop: true,
  typespeed: 50,
  backspeed: 50,
  backDelay: 2000,
 });
};
