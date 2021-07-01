//document.getElementById("count-el").innerText = 5 

let counting = document.getElementById("count-people")

let count = 0;

function increment() {
    count = count + 1;

    counting.innerText = count;
}

console.log("counting");