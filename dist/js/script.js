// NAVBAR FIXED
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixednav = header.offsetTop;
    const toTop = document.querySelector('#to-top');
  
    if (window.pageYOffset > fixednav) {
      header.classList.add('navbar-fixed');
      toTop.classList.remove('hidden');
      toTop.classList.add('flex');
    } else {
      header.classList.remove('navbar-fixed');
      toTop.classList.remove('flex');
      toTop.classList.add('hidden');
    }
  };
  // NAVBAR FIXED
  
  // HAMBURGER
  const hamburger = document.querySelector('#hamburger');
  const navMenu = document.querySelector('#nav-menu');
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  });
  
  // KLIK DILUAR NAVBAR HAMBURGER
  window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
      hamburger.classList.remove('hamburger-active');
      navMenu.classList.add('hidden');
    }
  });
  // KLIK DILUAR NAVBAR HAMBURGER
  
  // DARK MODE TOGGLE
  const darkToggle = document.querySelector('#dark-toggle');
  const html = document.querySelector('html');
  
  darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
      html.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      html.classList.remove('dark');
      localStorage.theme = 'light';
    }
  });
  // DARK MODE TOGGLE
  
  // PINDAHKAN POSISI TOGGLE DARK MODE SESUAI MODE
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }
  // PINDAHKAN POSISI TOGGLE DARK MODE SESUAI MODE