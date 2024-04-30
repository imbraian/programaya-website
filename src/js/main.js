const NAVMENU = document.querySelector('.nav__menu'),
      NAV_TOGGLE = document.querySelector('.nav__toggle'),
      NAV_CLOSE = document.querySelector('.nav__close');

if (NAV_TOGGLE) {
  NAV_TOGGLE.addEventListener('click', () => {
    NAVMENU.classList.add('show-menu');
  })
}

if (NAV_CLOSE) {
  NAV_CLOSE.addEventListener('click', () => {
    NAVMENU.classList.remove('show-menu');
  })
}

