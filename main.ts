const $form = document?.querySelector('form');
const $addNew = document?.querySelector('.add');
const $modal = document?.querySelector('dialog');
const $cancelButton = document?.querySelector('.cancel');
const $confirmButton = document?.querySelector('.confirm');

interface FormElements extends HTMLFormControlsCollection {
  time: HTMLSelectElement;
  day: HTMLSelectElement;
  event: HTMLTextAreaElement;
}

$addNew.addEventListener('click', () => {
  $modal.showModal();
});

$cancelButton.addEventListener('click', () => {
  $modal.close();
});



$form.addEventListener('submit', (event) => {
  event.preventDefault();
  const $tableRow = document.querySelectorAll('.table-row');

  const $formElement = $form.elements as FormElements;

  for (let i = 0; i < $tableRow.length; i++) {
    if ($tableRow[i].getAttribute('id') === )
  }
});
