var selectedItems = [];

function addToCart (item){
    const itemName = item.textContent.trim();
    const itemImg = item.getAttribute('data-img');
    
    const dropdownContent = document.getElementById("myDropdown");

    if (!document.getElementById(item.id + "-dropdown")) {
        const newItem = document.createElement("div");
        newItem.id = item.id + "-dropdown";
        newItem.classList.add("dropdown-item");

       
        const imgElement = document.createElement("img");
        imgElement.src = itemImg;
        imgElement.alt = itemName;
        imgElement.style.width = "30px";
        imgElement.style.height = "30px";
        imgElement.style.marginRight = "10px";

       
        const textElement = document.createTextNode(itemName);

      
        newItem.appendChild(imgElement);
        newItem.appendChild(textElement);

        
        dropdownContent.appendChild(newItem);
    }
}


function updateDropdown() {
    const dropdownContent = document.getElementById("myDropdown");
    dropdownContent.innerHTML = '';

    selectedItems.forEach(function(item) {
        const newItem = document.createElement("div");
        newItem.id = item.id + "-dropdown";
        newItem.classList.add("dropdown-item");

        const imgElement = document.createElement("img");
        imgElement.src = item.img;
        imgElement.alt = item.name;
        imgElement.style.width = "30px";
        imgElement.style.height = "30px";
        imgElement.style.marginRight = "10px";

        // En alternativ men mer "avansert" måte å løse oppdatering av innerHTML.
        // For å følge oppgavens retningslinjer oppdateres denne delen av funksjonen med .innerHTML attribute istedenfor.
        // const textElement = document.createTextNode(item.name);
        // newItem.appendChild(imgElement);
        // newItem.appendChild(textElement);
        
        newItem.innerHTML = imgElement.outerHTML + item.name;
        dropdownContent.appendChild(newItem);
    });
}

window.onclick = function(event) {
    if (!event.target.matches('.dropButton')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        
        function closeDropdown(index) {
            if (index >= dropdowns.length) return;
            
            const openDropdown = dropdowns[index];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
            
            return closeDropdown(index + 1);
        }
        
        return closeDropdown(0);
    }
}


function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function selectItem(item) {
    document.querySelector(".dropButton").textContent = item;
}

function payUp() {
    alert("Takk for kjøpet, vi kommer ikke til å bruke kjøpsinformasjonen din! Joda kanskje");
    selectedItems = [];
    updateDropdown();
}