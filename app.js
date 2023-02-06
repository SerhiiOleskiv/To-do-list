const item_list = document.getElementsByClassName('item_list')[0];
const input = document.querySelector('#input');



input.addEventListener("keydown", function (event) {
    if (event.key === "Enter")
        add_item()
})




function add_item() {
    const divParent = document.createElement("div");
    const divChild = document.createElement("div");
    const checkIcon = document.createElement("i");
    const trashIcon = document.createElement("i");



    divParent.className = "item";
    divParent.innerHTML = '<div>' + input.value + '</div>';
    checkIcon.className = "fa-solid fa-circle-check"
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", function () {
        if (checkIcon.style.color === "lightgray")
            checkIcon.style.color = "lightgreen";
        else checkIcon.style.color = "lightgray"
    })

    divChild.appendChild(checkIcon)

    trashIcon.className = "fa-solid fa-trash"
    trashIcon.style.color = "lightgray";
    trashIcon.addEventListener("click", function () {
        divParent.remove();
    })

    divChild.appendChild(trashIcon)


    divParent.appendChild(divChild)

    item_list.appendChild(divParent)

    input.value = ""
}



