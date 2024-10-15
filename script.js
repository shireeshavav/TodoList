let input=document.getElementById("input");
let ul=document.getElementById("list-container")
let addingTask=()=>{
    if(input.value===''){
        alert("Enter your task ");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=input.value;
        ul.appendChild(li);
        console.log(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value='';
    savedata();

}
ul.addEventListener("click",(eo)=>{
    if(eo.target.tagName==="LI"){
        eo.target.classList.toggle("checked");
        savedata();
    }
    else if(eo.target.tagName==="SPAN"){
        eo.target.parentElement.remove();
        savedata();

    }
},false);
let savedata=()=>{
    localStorage.setItem("data",ul.innerHTML);

}
function displayTasks(){
    ul.innerHTML=localStorage.getItem("data")
}
displayTasks();