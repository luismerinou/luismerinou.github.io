// This file is intentionally blank
// Use this file to add JavaScript to your project
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const theme = document.getElementById("theme");
const navbar = document.getElementById("navbar");
const projectsBtn = document.getElementById("projects-btn");

themeToggle.addEventListener('change', () => {
    body.classList.toggle('bg-dark', themeToggle.checked);
    //navbar
    if (navbar.classList.contains('bg-white')) {
       navbar.classList.remove('bg-white');
       navbar.classList.add('bg-dark');
    } else {
       navbar.classList.remove('bg-white');
       navbar.classList.add('bg-dark');
    }
    if (navbar.classList.contains('navbar-light')) {
      navbar.classList.remove('navbar-light');
      navbar.classList.add('navbar-dark');
    }
    else {
      navbar.classList.remove('navbar-dark');
      navbar.classList.add('navbar-light');
    }
    //theme section
    if (theme.classList.contains('bg-light')) {
      theme.classList.remove('bg-light');
      theme.classList.add('bg-dark');
    }
    else {
      theme.classList.remove('bg-dark');
      theme.classList.add('bg-light');
    }
    //projects button
    if (projectsBtn.classList.contains('btn-outline-dark')) {
      projectsBtn.classList.remove('btn-outline-dark');
      projectsBtn.classList.add('btn-outline-light');
    }
    else {
      projectsBtn.classList.remove('btn-outline-dark');
      projectsBtn.classList.add('btn-outline-light');
    }

});
