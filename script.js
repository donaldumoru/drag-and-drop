// Select elements with class "box", container with ID "right-container" and store them in variable
let lists = document.querySelectorAll(".box");
let rightBox = document.getElementById("right-container");

// Add "dragstart" event listener to each "list" element
lists.forEach(list => {
    list.addEventListener("dragstart", startDragging);
});

// Add "dragover" event listener to the "rightBox" container
rightBox.addEventListener("dragover", function (e) {
    e.preventDefault();
});

// Add "drop" event listener to the "rightBox" container
rightBox.addEventListener("drop", dropBox);

let selected = null;

// Function for when drag starts
function startDragging(e) {
    selected = e.target;
}

// Function for drag drop
function dropBox(e) {
    e.preventDefault();
    if (selected) {
        rightBox.appendChild(selected);
        selected = null;
    }
}