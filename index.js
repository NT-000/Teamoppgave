const cart = document.getElementById('myDropdown')
const varer = document.querySelectorAll('div[id]')








function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function selectItem(item) {
    document.querySelector(".dropButton").textContent = item;
}

window.onclick = function(event) {
    if (!event.target.matches('.dropButton')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}