import "./style.css";
import projects, {pro ,display}  from "./projects.js";
import {tasks,todo,addTask,display2 ,clean} from "./task.js";


let dialog = document.querySelector("#dia");
let projectsection = document.querySelector("#project");
let submit = document.querySelector("#submit");
let add = document.querySelector("#addbtn");
let all = document.querySelector("#all");
let cancel = document.querySelector("#cancel");
let submit2 = document.querySelector("#submit2");
let cancel2 = document.querySelector("#cancel2");
let dialog2 = document.querySelector("#dialog2");




let defaultname = ["Making an app","Homework"];
if(defaultname){
  defaultname.forEach((name)=>{
   pro.push(name);
    display(name);
  })
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    projects();
    projectsection.value = "";
    dialog.close();
});

add.addEventListener("click", () => {
    dialog.showModal();
})

all.addEventListener("click", () => {
    alert(pro.length);
})

cancel.addEventListener("click", () => {
   dialog.close();

})

cancel2.addEventListener("click", () => {
  clean();
  dialog2.close();

})
let taskbtn = document.querySelector("#todobtn");
taskbtn.addEventListener("click",()=>{
  dialog2.showModal();
})


submit2.addEventListener("click", (e) => {
  e.preventDefault();
  addTask();
 clean();
  dialog2.close();
});
