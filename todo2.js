var saved = document.querySelector(".savedTasks");
var val1 = document.querySelector(".inpTask");
var add1 = document.querySelector(".add");

class item {
    constructor(name) {
        this.create(name);
    }
    create(name) {
        var l1 = document.createElement("div");
        l1.classList.add("item");
        var input = document.createElement("input");
        input.type = "text";
        input.disabled = true;
        input.value = name;
        input.style.color = "rgb(1, 49, 1)";
        input.style.backgroundColor = "yellowgreen";
        input.style.fontWeight = "bold";
        input.style.border = "2px solid yellow"
        input.classList.add("item_inp");

        var remove = document.createElement("button");
        remove.classList.add("remove");
        remove.innerHTML = "<i class='fas fa-trash'></i>";
        remove.addEventListener("click", () => this.remove(l1));
        saved.appendChild(l1);

        l1.appendChild(input);
        l1.appendChild(remove);

    }
    remove(l1) {
        saved.removeChild(l1);
    }
}

add1.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
    if (e.which == 13) {
        check();
    }
})

function check() {
    if (val1.value != "") {
        new item(val1.value);
        val1.value = "";
    }
}

function removeAll() {
    document.querySelector(".savedTasks").innerHTML = "";
}