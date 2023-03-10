import { closeModal, openTodoModal, openDoingModal, openDoneModal, closeTodo, closeDoing, closeDone, todoTitleInput, doingTitleInput, doneTitleInput } from "./inputContent.js";

let addTodoButton = document.querySelector('.todo-add-button');
let cancelTodoButton = document.querySelector('.todo-cancel-button');
let contentTodo = document.querySelector('.havetodo-container');

let addDoingButton = document.querySelector('.doing-add-button');
let cancelDoingButton = document.querySelector('.doing-cancel-button');
let contentDoing = document.querySelector('.doing-container');

let addDoneButton = document.querySelector('.done-add-button');
let cancelDoneButton = document.querySelector('.done-cancel-button');
let contentDone = document.querySelector('.done-container');

let todo_list = [];
let doing_list = [];
let done_list = [];

function valid_input(target){
    if(!target.value){
        alert('제목을 입력해주세요');
        return -1;
    }
    else{
        return 0;
    }
}

function registerModal(target){

    let newTitle='';
    let newContent='';

    if(target == contentTodo){
        newTitle = document.querySelector('.todo-title-input').value;
        newContent = document.querySelector('.todo-caption-input').value;
        todo_list.push({title : newTitle, caption : newContent});
        //console.log(todo_list.length);
        //console.log(todo_list);
    }
    else if(target === contentDoing){
        //console.log(document.querySelector('#title-input'));
        newTitle = document.querySelector('.doing-title-input').value;
        newContent = document.querySelector('.doing-caption-input').value;
        doing_list.push({title : newTitle, caption : newContent});
        //console.log(doing_list.length);
        //console.log(doing_list);
    }    
    else if(target == contentDone){
        newTitle = document.querySelector('.done-title-input').value;
        newContent = document.querySelector('.done-caption-input').value;
        done_list.push({title : newTitle, caption : newContent});
        //console.log(done_list.length);
        //console.log(done_list);
    }

    let newSection = document.createElement("section");
    let newClass = document.createAttribute("class");
    let newId = document.createAttribute("id");

    newClass.value = "todolist";
    newSection.setAttributeNode(newClass);
    
    let newDiv = document.createElement("div");
    let newClass1 = document.createAttribute("class");
    newClass1.value="list-header";
    newDiv.setAttributeNode(newClass1);
    newSection.appendChild(newDiv);

    let newDiv1 = document.createElement("div");
    let newClass2 = document.createAttribute("class");
    newClass2.value="list-title";
    newDiv1.setAttributeNode(newClass2);
    newDiv1.innerText = newTitle;
    newDiv.appendChild(newDiv1);

    let newButton = document.createElement("button");
    let newClass3 = document.createAttribute("class");
    newClass3.value="x-content-button";
    newButton.setAttributeNode(newClass3);
    newDiv.appendChild(newButton);

    let newSvg = document.createElementNS("http://www.w3.org/2000/svg" ,"svg");
    newSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    newSvg.setAttribute('width', '12');
    newSvg.setAttribute("height", "12");
    newSvg.setAttribute("viewBox", "0 0 12 12");
    newSvg.setAttribute("fill", "none");
    let newPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    newPath.setAttribute("d", "M1.5 11.25L0.75 10.5L5.25 6L0.75 1.5L1.5 0.75L6 5.25L10.5 0.75L11.25 1.5L6.75 6L11.25 10.5L10.5 11.25L6 6.75L1.5 11.25Z");
    newPath.setAttribute("fill", "black");
    newSvg.appendChild(newPath);
    newButton.appendChild(newSvg);
    newDiv.appendChild(newButton);

    let newDiv2 = document.createElement("div");
    let newClass4 = document.createAttribute("class");
    newClass4.value = "caption";
    newDiv2.setAttributeNode(newClass4);
    newDiv2.innerText = newContent;
    newSection.appendChild(newDiv2);

    target.appendChild(newSection);
}

addTodoButton.addEventListener('click', (e) => {
    e.preventDefault(); //새로고침 방지

    if(valid_input(todoTitleInput) === 0){
        registerModal(contentTodo);
        closeTodo();
    }
});

addDoingButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    //console.log(e);

    if(valid_input(doingTitleInput) === 0){
        registerModal(contentDoing);
        closeDoing();
    }
});

addDoneButton.addEventListener('click', (e) => {
    e.preventDefault();

    if(valid_input(doneTitleInput) === 0){
        registerModal(contentDone);
        closeDone();
    }
});


cancelTodoButton.addEventListener('click', () => closeTodo());
cancelDoingButton.addEventListener('click', () => closeDoing());
cancelDoneButton.addEventListener('click', () => closeDone());