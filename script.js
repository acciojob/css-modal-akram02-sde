//your JS code here. If required.
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');
const modal = document.getElementById('modal');

openModalBtn.addEventListener('click', function() {
  modal.style.display = 'flex';
});

closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});