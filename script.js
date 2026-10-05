console.log("script.js is connected");

// Get the box element and create a button element
let box = document.getElementById("box");
let btn = document.getElementById("colourbtn");
let title = document.getElementById("title");

//To remember which color the box is currently showing
let isGreen = false;

// Adding a click event listener to the button
btn.addEventListener("click", function() {
  
    //Changing the color of the box and updating the title based on the current color.
    if (isGreen === false) {
        box.style.backgroundColor = "green";
        title.innerHTML = "The box is now green!";
        isGreen = true;
    } else {
        box.style.backgroundColor = "purple";
        title.innerHTML = "The box is now purple!";
        isGreen = false;
    }

});

// Adding a keydown event listener to the document
let keymsg = document.getElementById("keymsg");

// Adding a keydown event listener to the document
document.addEventListener("keydown", function(event) {
    keymsg.innerHTML = "You pressed the " + event.key + " key!";
});

// Adding a resize event listener to the window
let sizemsg = document.getElementById("sizemsg");

function showWidth() {
    sizemsg.innerHTML = "The window width is: " + window.innerWidth + "px";
}

window.addEventListener("resize", showWidth);

showWidth(); 
// Call the function initially to display the width when the page loads