let close = document.querySelector("#close-btn");

let create = document.querySelector("#create-btn");

let task = [];

close.addEventListener("click", function(){
    window.location.href = "../notes/index.html";
});

const form = document.querySelector("form");

form.addEventListener("submit", function(evt){

    evt.preventDefault();

    console.log("Submit Event Running");

    const imageUrl = document.querySelector("#image-url");

    const fullName = document.querySelector("#full-name");

    const homeTown = document.querySelector("#home-town");

    const purpose = document.querySelector("#purpose");

    const phone = document.querySelector("#phone");

    const inputs = document.querySelectorAll(".input-group input");

    let isValid = true;

    inputs.forEach(function(input){

        let error = input.parentElement.querySelector(".error");

        if(!error){
            error = document.createElement("p");
            error.classList.add("error");
            input.parentElement.appendChild(error);
        }

        error.textContent = "";

        if(input.value.trim() === ""){

            error.textContent = "This field is required";
            isValid = false;

        }
        else if(input.value.trim().length < 3){

            error.textContent = "Minimum 3 characters required";
            isValid = false;

        }

    });

    let category = document.querySelector('input[name="category"]:checked');

    const categoryBox = document.querySelector(".category");

    let categoryError = categoryBox.querySelector(".error");

    if(!categoryError){

        categoryError = document.createElement("p");

        categoryError.classList.add("error");

        categoryBox.appendChild(categoryError);
    }

    categoryError.textContent = "";

    if(!category){
        categoryError.textContent = "Please select a category";
        isValid = false;
    }

    if(isValid){
        console.log("Form Submitted");
        window.location.href = "../notes/index.html";
    }

    if(isValid){

        let note = {

            image: imageUrl.value.trim(),

            fullName: fullName.value.trim(),

            homeTown: homeTown.value.trim(),

            purpose: purpose.value.trim(),

            category: category.value,

            phone: phone.value.trim()

        };

        saveToLocalStorage(note);

    }



});

function saveToLocalStorage(obj){

    if(localStorage.getItem("tasks") === null){
        let oldTasks = [];
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }
    else{
        let oldTasks = localStorage.getItem("tasks");
        oldTasks = JSON.parse(oldTasks);
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }
}