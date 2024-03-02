const taskInput=document. getElementById("taskinput");
const addTaskBtn=document.getElementById("taskinputBtn");
const taskList = document.getElementById("taskList")
const clearAll = document.getElementById("clearAll")
addTaskBtn.addEventListener("click",addTask);
var task = "task";
var i =0; 

 //sidebar
 function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}
 
 function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}
function addTask(){
    
    const texteTâche =taskInput.value.trim();


if(texteTâche !==""){
    const listitem = document.createElement("li");
    listitem.textContent=texteTâche;
    taskList.appendChild(listitem);
    taskInput.value="";

   

    //bouton delete
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent="supprimer";
    listitem.appendChild(deleteBtn);
    deleteBtn.addEventListener("click",()=>{
        listitem.remove();
    });

    //bouton finir 
    const finis =document.createElement("button");
    var compteur=0;
    finis.textContent="finis";
    listitem.appendChild(finis);
    finis.addEventListener("click",()=>{
        
        listitem.style.color = "#1EE661";
        compteur+=1
        

    if(compteur==2){
        listitem.style.color = "black";
        compteur=0;
    }
    });

    //bouton edit
    const editBtn = document.createElement("button");

    editBtn.textContent="edit"
    listitem.appendChild(editBtn);
    

    editBtn.addEventListener("click", () => {
       deleteBtn.textContent="";
       finis.textContent="";
       editBtn.textContent="";
        
        taskInput.value = listitem.textContent;
        listitem.remove();
    });
    
    
}else{
    alert("veuiller entrer une tâche valide")
}
localStorage.setItem(task.concat(i),texteTâche);
i++;
clearAll.addEventListener("click", () => {
    localStorage.clear();
})
}
