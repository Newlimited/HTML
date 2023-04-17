function showMsg(inputId, msg) {
    if (!inputId.value) {
        msg.style.display = 'block';
    } else {
        msg.style.display = 'none';
    }
}
function selectMsg() {
    var inputId = document.getElementById('gender');
    var msg = document.getElementById('genderMsg');
    if (inputId.value == '') {
        msg.style.display = 'block';
    } else {
        msg.style.display = 'none';

    }
}