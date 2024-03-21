const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const completedListContainer = document.getElementById("completed-list-container");

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
    saveData();
}

/**
// Initial Functionality: Strikethrough + Check Off Item
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
**/

// New Functionality: Move to New List.
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        let newLi = document.createElement("li");
        newLi.classList.toggle("checked");
        newLi.innerHTML = e.target.innerHTML;
        completedListContainer.appendChild(newLi);
        e.target.remove();
    }
    else if(e.target.tagName === "XICON"){
        e.target.parentElement.remove();
    }
    saveData();
}, false);

completedListContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        let newLi = document.createElement("li");
        newLi.innerHTML = e.target.innerHTML;
        listContainer.appendChild(newLi);
        e.target.remove();
    }
    else if(e.target.tagName === "XICON"){
        e.target.parentElement.remove();
    }
    saveData();
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