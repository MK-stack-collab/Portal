  const btn = document.getElementById('dropdownBtn');
  const menu = document.getElementById('dropdownMenu');

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('show');
  });

  document.addEventListener('click', () => {
    menu.classList.remove('show');
  });