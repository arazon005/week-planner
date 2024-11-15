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
    if ($tableRow[i].getAttribute('id') === String(index)) {
      while ($tableRow[i].firstChild) {
        $tableRow[i].firstChild.remove();
      }
      renderEvent($tableRow[i], newEntry);
    }
  }
  index++;
  $modal.close();
  $form.reset();
});

function renderEvent(row: Element, entry: Entry): void {
  const $timeCell = document.createElement('td');
  $timeCell.textContent = entry.time;
  row.appendChild($timeCell);

  const $eventCell = document.createElement('td');
  $eventCell.textContent = entry.event;
  row.appendChild($eventCell);

  const $actionCell = document.createElement('td');
  const $editButton = document.createElement('button');
  const $deleteButton = document.createElement('button');
  $editButton.setAttribute('type', 'button');
  $editButton.className = 'edit';
  $editButton.textContent = 'edit';
  $deleteButton.setAttribute('type', 'button');
  $deleteButton.className = 'delete';
  $deleteButton.textContent = 'delete';
  $actionCell.appendChild($editButton);
  $actionCell.appendChild($deleteButton);
  row.appendChild($actionCell);
}

const $day = document.querySelector('#day');

const $table = document.querySelectorAll('table');

$day.addEventListener('change', (event) => {
  const eventTarget = event.target;
  console.log(eventTarget.value);
  viewSwap(eventTarget.value);
});

function viewSwap(view: string): void {
  for (let i = 0; i < $table.length; i++) {
    if ($table[i].getAttribute('data-view') === view) {
      console.log();
      $table[i].classList.remove('hidden');
    } else {
      $table[i].classList.add(`hidden`);
    }
  }
}
