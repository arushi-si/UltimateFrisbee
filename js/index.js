const navTabs = document.querySelectorAll('.navTab');
const menuTab = document.querySelector('.menu');

menuTab.addEventListener('click', () => {
  navTabs.forEach(tab => tab.classList.toggle('navTab') );
});
