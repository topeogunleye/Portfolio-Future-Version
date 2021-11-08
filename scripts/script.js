// https://codepen.io/ljc-dev/embed/GRoLWxj?height=600&default-tab=js,result&embed-version=2
// https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0
var navbar = document.querySelector('.navbar'); // list
var ham = document.querySelector('.ham'); //button

// toggles hamburger menu in and out when clicking on the hamburger
function toggleHamburger() {
  navbar.classList.toggle('showNav');
  ham.classList.toggle('showClose');
}

ham.addEventListener('click', toggleHamburger);

// toggle when clicking on links
var menuLinks = document.querySelectorAll('.menuLink');
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', toggleHamburger);
});

// Add Highlight to Active Nav Link
// https://dev.to/areeburrub/change-nav-link-s-style-as-you-scroll-4p62
const sections = document.querySelectorAll('section', 'footer');

const navLi = document.querySelectorAll('.navbar ul li a');

window.onscroll = () => {
  var current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;

    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute('id');
      // console.log(current);
    }
  });

  navLi.forEach((li) => {
    // console.log(li);
    li.classList.remove('active');

    if (li.classList.contains(current)) {
      console.log(li)
      li.classList.add('active');
    }
  });
};
