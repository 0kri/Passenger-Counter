let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el");

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let save = " " + count + " -"
    saveEl.innerText += save 
    console.log(count);
}