import "../css/style.css";

const toggle = document.querySelector(".dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");




function toggleDropdown(toggleButton, menu){
    menu.style.visibility = "hidden"
    toggleButton.addEventListener("click", () => {
        if (menu.style.visibility === "hidden"){
            menu.style.visibility = "visible"
        } else {
            menu.style.visibility = "hidden";
        }
    })
}

toggleDropdown(toggle, dropdownContent);

export {toggleDropdown}