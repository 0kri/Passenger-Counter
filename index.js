let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
    count += 1
    countEl.innerText = count
}

function decrement() {
    count -= 1
    countEl.innerText = count
}

function save() {
    let savestr = " " + count + " ,"
    saveEl.innerText += savestr 
    console.log(count);
    count = 0
    countEl.textContent = 0
}

function reset() {
    count = 0
    countEl.textContent = 0
    saveEl.textContent = "Previous entries: "
}