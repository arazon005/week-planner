var $form = document === null || document === void 0 ? void 0 : document.querySelector('form');
var $addNew = document === null || document === void 0 ? void 0 : document.querySelector('.add');
var $modal = document === null || document === void 0 ? void 0 : document.querySelector('dialog');
var $cancelButton = document === null || document === void 0 ? void 0 : document.querySelector('.cancel');
var $confirmButton = document === null || document === void 0 ? void 0 : document.querySelector('.confirm');
$addNew.addEventListener('click', function () {
    $modal.showModal();
});
$cancelButton.addEventListener('click', function () {
    $modal.close();
});
$form.addEventListener('submit', function () {
});
