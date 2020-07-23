var listItem = document.getElementById("list");

function addTodo() {
    var todo = document.getElementById("todo");

    //li tag

    var li = document.createElement("li");
    var liTxt = document.createTextNode(todo.value);
    li.appendChild(liTxt);
    listItem.appendChild(li);
    todo.value = "";

    //Delete button

    var delBtn = document.createElement("button");
    var delTxt = document.createTextNode("Delete");
    delBtn.setAttribute("class", "btn btn-danger m-2 float-right")
    delBtn.setAttribute("onClick", "deleteItem(this)")
    delBtn.appendChild(delTxt);
    li.appendChild(delBtn);

    //Edit button

    var editBtn = document.createElement("button");
    var editTxt = document.createTextNode("Edit");
    editBtn.setAttribute("class", "btn btn-danger m-2 float-right")
    editBtn.setAttribute("onClick", "editItem(this)")
    editBtn.appendChild(editTxt);
    li.appendChild(editBtn);
}

// delete function

function deleteItem(e) {
    e.parentNode.remove();
}

// edit function

function editItem(e) {
    var val = e.parentNode.firstChild.nodeValue;
    var editVal = prompt("Enter your edit Todo:", val);
    e.parentNode.firstChild.nodeValue = editVal;
}

// deleteAll function

function deleteAll() {
    listItem.innerHTML = "";
}