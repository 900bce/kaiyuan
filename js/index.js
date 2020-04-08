const closeSetup = () => {
  document.querySelector('.ios-setup').style.display = 'none';
}

const openSetup = () => {
  document.querySelector('.ios-setup').style.display = 'block';
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

const closeSalary = () => {
  document.querySelector('.salary').style.display = 'none';
}

const openSalary = () => {
  document.querySelector('.salary').style.display = 'block';
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

document.querySelectorAll('.link-ms').forEach(item => {
  item.textContent = Math.floor(Math.random() * 5) + 1 + 'ms';
})