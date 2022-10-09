
let counteL = document.getElementById("count-el")
let count=0

let countInterval=document.getElementById("save-el")

function increment(){
   count+=1
   counteL.innerText=count
   

}
function save(){
    
    countInterval.textContent += count +" -"+" "
    count=0
    counteL.innerText=count
}

