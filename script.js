const input = document.querySelector("#input");
const button = document.getElementById("button");
const output = document.getElementById("output");

button.addEventListener("click",()=>{
    const script = input.value.trim();
    if(script){
        output.textContent = ${script};
    }
    else{
        output.textContent = "Field cant be left empty";
    }
});


let toggle = document.querySelector("#mode");
let curr = "light";

toggle.addEventListener("click",()=>{
 if(curr === "light"){
    document.body.style.backgroundColor = "black";
    curr = "dark";
} else {
    document.body.style.backgroundColor = "white";
    curr = "light";
}

});


//Essai start maatra bhayo aba bholi baata khatra time dina parxa and we will give.