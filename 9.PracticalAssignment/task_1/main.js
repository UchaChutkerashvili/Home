const modalContainer = document.getElementById('modalContainer');
const modalOverlay = document.getElementById('modalOverlay');

function showModal() {
  modalContainer.style.display = 'block';
  modalOverlay.style.display = 'block';
}

function hideModal() {
  modalContainer.style.display = 'none';
  modalOverlay.style.display = 'none';
}


const openModalButton = document.getElementById('openModalButton');
const closeModalButton = document.getElementById('closeModalButton');

openModalButton.addEventListener('click', showModal);
closeModalButton.addEventListener('click', hideModal);
