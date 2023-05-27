document.addEventListener('DOMContentLoaded', function() {
    var contentSections = document.getElementsByClassName('content');
    for (var i = 0; i < contentSections.length; i++) {
        var content = contentSections[i];
        content.classList.add('hidden');
    }
});

function toggle(contentId) {
    var content = document.getElementById(contentId);
    content.classList.toggle('hidden');
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

const textareas = document.querySelectorAll('.content textarea');

textareas.forEach(function(textarea) {
    textarea.addEventListener('input', function() {
        const characterCount = this.value.length;

        if (characterCount > 1000) {
            this.classList.add('red-text');
        } else {
            this.classList.remove('red-text');
        }
    });
});

const textarea = document.getElementById('notes');

textarea.addEventListener('input', function() {
  const characterCount = this.value.length;

  if (characterCount > 1000) {
    this.classList.add('red-text');
  } else {
    this.classList.remove('red-text');
  }
});
