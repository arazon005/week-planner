var $form = document === null || document === void 0 ? void 0 : document.querySelector('form');
var $addNew = document === null || document === void 0 ? void 0 : document.querySelector('.add');
var $modal = document === null || document === void 0 ? void 0 : document.querySelector('dialog');
var $cancelButton = document === null || document === void 0 ? void 0 : document.querySelector('.cancel');
var index = 1;
$addNew.addEventListener('click', function () {
    $modal.showModal();
});
$cancelButton.addEventListener('click', function () {
    $modal.close();
});
$form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('event fired');
    var $tableRow = document.querySelectorAll('.table-row');
    var $formElement = $form.elements;
    var newEntry = {
        time: $formElement.time.value,
        day: $formElement.day.value,
        event: $formElement.eventInfo.value,
        id: index,
    };
    for (var i = 0; i < $tableRow.length; i++) {
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
function renderEvent(row, entry) {
    var $timeCell = document.createElement('td');
    $timeCell.textContent = entry.time;
    row.appendChild($timeCell);
    var $eventCell = document.createElement('td');
    $eventCell.textContent = entry.event;
    row.appendChild($eventCell);
    var $actionCell = document.createElement('td');
    var $editButton = document.createElement('button');
    var $deleteButton = document.createElement('button');
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
function viewSwap(view) {
}
