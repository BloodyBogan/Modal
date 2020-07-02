{
  const button = document.querySelector('.btn');
  const modalContainer = document.querySelector('.modal-container');

  button.addEventListener('click', () => {
    modalContainer.classList.add('open');
  });

  modalContainer.querySelector('.close').addEventListener('click', () => {
    modalContainer.classList.remove('open');
  });

  window.addEventListener('click', (e) => {
    if (e.target.classList.value === 'overlay') {
      modalContainer.classList.remove('open');
    }
  });
}
