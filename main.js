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
        if ($tableRow[i].getAttribute('id') === String(1)) {
            while ($tableRow[i].firstChild) {
                $tableRow[i].firstChild.remove();
            }
            renderEvent($tableRow[i], newEntry);
        }
    }
    index++;
});
function renderEvent(row, entry) {
    var $timeCell = document.createElement('td');
    $timeCell.textContent = entry.time;
    row.appendChild($timeCell);
}
