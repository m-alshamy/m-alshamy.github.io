function searchFunction() {
    var input, filter, content, sc, i, txtValue;
    input = document.getElementById('searchBox');
    filter = input.value.toUpperCase();
    content = document.getElementsByTagName('*');

    for (i = 0; i < content.length; i++) {
        var tagName = content[i].tagName.toUpperCase();
        if (tagName !== 'thead' && tagName !== 'H5' && tagName !== 'H5') {
            txtValue = content[i].textContent || content[i].innerText;

            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                content[i].style.display = '';
            } else {
                content[i].style.display = 'none';
            }
        }
    }
}
function filterFunction() {
    var input, filter, content, txt, i;
    input = document.getElementById('filterBox');
    filter = input.value.toUpperCase();
    content = document.getElementsByTagName('sc2');

    for (i = 0; i < content.length; i++) {
        txt = content[i];
        if (txt.innerText.toUpperCase().indexOf(filter) > -1) {
            content[i].style.display = '';
        } else {
            content[i].style.display = 'none';
        }
    }
}