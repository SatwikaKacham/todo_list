console.log(document)
var boxInput = document.querySelector(".inputIntake input");
console.log(boxInput)
var addInput = document.querySelector(".inputIntake button");
console.log(addInput)
var tasksLeft = document.querySelector(".clearall .remainingTasks");
console.log(tasksLeft)
var clearTasks = document.querySelector(".clearall button");
console.log(clearTasks)
var todoList = document.querySelector(".list");
console.log(todoList)
var listArr = [];
showItem();
listLen();
boxInput.onkeyup = ()=>
{
    var inputAns = boxInput.value;
    if(inputAns.trim()!=0){
    addInput.classList.add("active");}
    else{
    addInput.classList.remove("active");}
}

addInput.onclick = ()=>{
    var inputFinal = boxInput.value;
    var localStorageData = localStorage.getItem("new todo");
    console.log({localStorageData})
 if(localStorageData == null)
    {

        listArr=[];
    }
    else 
    {
        listArr=JSON.parse(localStorageData);
        console.log({listArr})
    }
    listArr.push(inputFinal);
    localStorage.setItem("new todo",JSON.stringify(listArr));
  showItem();
  
}


function showItem()
{
    var localStorageData = localStorage.getItem("new todo");
    if(localStorageData == null)
    {

        listArr=[];
    }
    else 
    {
        listArr=JSON.parse(localStorageData);  
    }
     
    var newTask ="";
 listArr.forEach((element,index) => {
             newTask +=  `<li>${element} <span  onclick = "deleteLi(${index})"><i class="fi-rs-trash"></i> </span> </li>`;
        })
 todoList.innerHTML = newTask;
 boxInput.value = "";
 addInput.classList.remove("active");
 listLen();
}

function deleteLi(index)
{
    var localStorageData = localStorage.getItem("new todo");
    listArr=JSON.parse(localStorageData); 
    listArr.splice(index,1);
    localStorage.setItem("new todo",JSON.stringify(listArr));
    showItem();
    listLen();
}
function listLen(){
tasksLeft.textContent= listArr.length;
if(listArr.length>0)
{
    clearTasks.classList.add("active");
}
else{
    clearTasks.classList.remove("active");
        }
    }


clearTasks.onclick =()=>{
    listArr= [];
    localStorage.setItem("new todo",JSON.stringify(listArr));
    showItem();
    listLen();
}


