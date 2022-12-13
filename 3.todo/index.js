const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const Input = document.getElementById('search');
const tasks = document.getElementById('all-lists');


addButton.addEventListener('click',()=>{
    var paragraph = document.createElement('p');
    paragraph.innerText = Input.value;
    if(Input.value !== "")
        tasks.appendChild(paragraph);
    Input.value= "";
    paragraph.style.margin = "10px";
    paragraph.style.border = "3px solid";
    paragraph.style.borderRadius = "7px";
    paragraph.style.padding = "4px";

    paragraph.addEventListener('click', ()=>{
        paragraph.style.textDecoration = "line-through";
    })

})
removeButton.addEventListener('click', ()=>{
    tasks.removeChild(tasks.firstChild)
});