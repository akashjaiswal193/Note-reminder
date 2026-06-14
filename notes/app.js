// new cards create karna hai, data local storage me save karana hai
// local storage se hi cards ko show karna hai
// button ko  hNDE KARNA HAI 
// filters kohandle karna hai

let addBtn = document.querySelector("#addBtn");

let prevBtn = document.querySelector("#prevBtn");

let nextBtn = document.querySelector("#nextBtn");

let black = document.querySelector(".black");

let purple = document.querySelector(".purple");

let orange = document.querySelector(".orange");

let green = document.querySelector(".green");

let callBtn = document.querySelector("#callBtn");

let messageBtn = document.querySelector("#messageBtn");

addBtn.addEventListener("click", function(){
    window.location.href = "../login/form.html";
}); 

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let currentIndex = 0;

function showCards(){

    if(tasks.length === 0) return;

    let task = tasks[currentIndex];

    document.querySelector(".profile img").src = task.image;

    document.querySelector(".info h2").textContent = task.fullName;

    document.querySelectorAll(".details span")[0].textContent = task.homeTown;

    document.querySelectorAll(".details span")[1].textContent = task.category;
}

showCards();

let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];

console.log(allTasks);

// localStorage.removeItem("tasks");

nextBtn.addEventListener("click", function(){

    currentIndex++;

    if(currentIndex >= tasks.length){
        currentIndex = 0;
    }

    showCards();
});

prevBtn.addEventListener("click", function(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = tasks.length - 1;
    }

    showCards();

});

function filterNotes(category){

    let filteredTasks = tasks.filter(function(task){
        return task.category === category;
    });

    currentIndex = 0;

    tasks = filteredTasks;

    showCards();

}

black.addEventListener("click", function(){
    filterNotes("Emergency");
});

purple.addEventListener("click", function(){
    filterNotes("Important");
});

orange.addEventListener("click", function(){
    filterNotes("Urgent");
});

green.addEventListener("click", function(){
    filterNotes("No Rush");
});

let all = document.querySelector(".all");

all.addEventListener("click", function(){

    tasks = [...allTasks];

    currentIndex = 0;

    showCards();

});

callBtn.addEventListener("click", function(){

    alert(
        `Phone Number: ${tasks[currentIndex].phone}`
    );

});

messageBtn.addEventListener("click", function(){

    let phone = tasks[currentIndex].phone;

    let text = encodeURIComponent(`Hello ${tasks[currentIndex].fullName},I am contacting you regarding: ${tasks[currentIndex].purpose}`);

    window.open(`https://wa.me/91${phone}?text=${text}`);

});