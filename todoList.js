const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value == ""){
        alert("You must write something!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // Task Deletion Functionality Here:
        let xIcon = document.createElement("xIcon");
        xIcon.innerHTML = "\u00d7";
        li.appendChild(xIcon);
    }
    inputBox.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "XICON"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function wipe() {
    // select the last element
    while (listContainer.firstChild) {
        listContainer.removeChild(listContainer.firstChild);
    }
    saveData();
}

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){ 
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

// function duplicateCheck(){

// }