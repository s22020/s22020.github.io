/* show menu */
function showMenu(toggleId, navId) {
  var toggle = document.getElementById(toggleId);
  var nav = document.getElementById(navId);

  toggle.addEventListener('click',function() {
    nav.classList.toggle('show-menu');
  });
}

showMenu('nav-toggle','nav-menu');

/* hide mobile menu */
var navLink = document.getElementsByClassName('nav_link');

function linkAction() {
  var navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

for(var i=0;i<navLink.length;i++) {
  navLink[i].addEventListener('click', linkAction);
}


/* scroll */
// pobierz wszystkie elementy section ktore maja atrybut id
var sections = document.querySelectorAll('section[id]');


function scrollActive() {
  // zwraca liczbe pikseli, po ktorych dokument jest wlasnie przewijany wzdluz osi Y
  var scrollY = window.pageYOffset;

  // sections.forEach(function(current) {
// dla kazdej sekcji ktora ma id nazwanej current
  sections.forEach(current =>{
    // zwraca wysokosc elementu razem z paddingiem i border
    var sectionHeight = current.offsetHeight;
    // zwraca dystans zewnetrznej krawedzi danego elementu
    // ktory jest relative do wewnetrznej gornej krawedzi
    // najblizszego parenta
    var sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // * - matchuje wszystkie id zawierajaca sectionID
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);


function scrollTop() {
  var scrollTop = document.getElementById('scroll-top');
  if (this.scrollY >= 200) {
    scrollTop.classList.add('show-scroll');
  } else {
    scrollTop.classList.remove('show-scroll');
  }
}

window.addEventListener('scroll', scrollTop);


function switchDarkMode(toggleId) {
  var toggle = document.getElementById(toggleId);
  var body = document.body;

  toggle.addEventListener('click',function() {
    // if (body.classList[0] != "") {
      body.classList.toggle('dark-theme');
    // } else {
      // body.classList.
    // }
  });
}

switchDarkMode('theme-button');
