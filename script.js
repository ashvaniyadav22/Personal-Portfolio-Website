// ==========================
// Show / Hide About Section
// ==========================

function toggleAbout() {

    let about = document.getElementById("aboutContent");

    if (about.style.display === "none") {
        about.style.display = "block";
    } else {
        about.style.display = "none";
    }

}


// ==========================
// Image Slider
// ==========================

let images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];

let current = 0;

function nextImage() {

    current++;

    if (current >= images.length) {
        current = 0;
    }

    document.getElementById("slider").src = images[current];

}

function previousImage() {

    current--;

    if (current < 0) {
        current = images.length - 1;
    }

    document.getElementById("slider").src = images[current];

}


// ==========================
// To-Do List
// ==========================

function addTask() {

    let input = document.getElementById("taskInput");

    let task = input.value.trim();

    if (task === "") {

        alert("Please enter a task.");

        return;
    }

    let li = document.createElement("li");

    li.textContent = task;

    let removeBtn = document.createElement("button");

    removeBtn.textContent = "Remove";

    removeBtn.onclick = function () {
        li.remove();
    };

    li.appendChild(removeBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";

}


// ==========================
// Contact Form Validation
// ==========================

document.getElementById("contactForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let message = document.getElementById("message").value.trim();

    if(name.length < 3){

        alert("Name must contain at least 3 characters.");

        return;

    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        alert("Enter a valid email.");

        return;

    }

    if(message.length < 10){

        alert("Message should contain at least 10 characters.");

        return;

    }

    alert("Form submitted successfully!");

    this.reset();

});


// ==========================
// Dark / Light Mode
// ==========================

function toggleTheme(){

    document.body.classList.toggle("dark-mode");

}