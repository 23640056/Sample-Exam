function toggle(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

function checkLength(textarea) {
    var notes = textarea.value;
    var maxLength = 1000;

    if (notes.length > maxLength) {
      textarea.parentNode.classList.add('error');
    } 
    else {
      textarea.parentNode.classList.remove('error');
    }
}