const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");

    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask()


// +++++++++++++ Time/Day +++++++++


const Daytime = document.getElementsByClassName("time_day")[0];

function updateTime(){
let today = new Date();
let day = today.getDay();
let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday"];
// console.log(`Today is: ${daylist[day]}`);

let hour = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

// console.log(`Today time is: ${hour}: ${minutes}min: ${seconds}sec`);

Daytime.innerHTML = (`${daylist[day]} ${hour}h: ${minutes}min: ${seconds}sec`);
}
// Initial update
updateTime();

// Update every second (1000 milliseconds)
setInterval(updateTime, 1000);
