const $form = document?.querySelector('form');
const $addNew = document?.querySelector('.add');
const $modal = document?.querySelector('dialog');
const $cancelButton = document?.querySelector('.cancel');
// const $confirmButton = document?.querySelector('.confirm');

interface FormElements extends HTMLFormControlsCollection {
  time: HTMLSelectElement;
  day: HTMLSelectElement;
  eventInfo: HTMLTextAreaElement;
}

interface Entry {
  time: string;
  day: string;
  event: string;
  id: number;
}
let index: number = 1;
$addNew.addEventListener('click', () => {
  $modal.showModal();
});

$cancelButton.addEventListener('click', () => {
  $modal.close();
});

$form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('event fired');
  const $tableRow = document.querySelectorAll('.table-row');

  const $formElement = $form.elements as FormElements;
  const newEntry = {
    time: $formElement.time.value,
    day: $formElement.day.value,
    event: $formElement.eventInfo.value,
    id: index,
  };

  for (let i = 0; i < $tableRow.length; i++) {
    if ($tableRow[i].getAttribute('id') === String(1)) {
      while ($tableRow[i].firstChild) {
        $tableRow[i].firstChild.remove();
      }
      renderEvent($tableRow[i], newEntry);
    }
  }
  index++;
});

function renderEvent(row: Element, entry: Entry): void {
  const $timeCell = document.createElement('td');
  $timeCell.textContent = entry.time;
  row.appendChild($timeCell);
}
