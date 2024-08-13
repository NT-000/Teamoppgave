



function addToCart (item){
        if (!selectedItems.includes(item)) {
            selectedItems.push(item);
            updateDropdown();
        }
}



function updateDropdown() {
    dropdownContent.innerHTML = '';
    selectedItems.forEach(function(item){
        var link = document.createElement('a');
        link.href = "#";
        link.textContent = item;
        dropdownContent.appendChild(link); 
    }); 
}

window.onclick = function(event) {
    if (!event.target.matches('.dropButton')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}


function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function selectItem(item) {
    document.querySelector(".dropButton").textContent = item;
}