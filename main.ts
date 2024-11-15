const $form = document?.querySelector('form');
const $addNew = document?.querySelector('.add');
const $modal = document?.querySelector('dialog');
const $cancelButton = document?.querySelector('.cancel');
const $confirmButton = document?.querySelector('.confirm');

$addNew.addEventListener('click', () => {
  $modal.showModal();
});

$cancelButton.addEventListener('click', () => {
  $modal.close();
});

$form.addEventListener('submit', () => {});
