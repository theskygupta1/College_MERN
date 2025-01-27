if (localStorage.getItem("isLoggedIn") === "true") {
    showTodoPage();
}

function login() {
    showTodoPage();
}

function showTodoPage() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("todo-container").style.display = "block";
}

function addItem() {
    const Input = document.getElementById('Input');
    const Name = Input.value.trim();
    
    if (Name) {
        const listItem = document.createElement('li');
        listItem.textContent = Name;

        const deleteButton = document.createElement('button');
        const editButton = document.createElement('button');
        deleteButton.classList.add('btn-delete');
        editButton.classList.add('btn-warning');
        deleteButton.textContent = 'Delete';
        editButton.textContent = 'Edit';
        
        deleteButton.onclick = function() {
            listItem.remove();
        };

        editButton.onclick = function() {
            const newName = prompt("Edit the item name:", Name);
            if (newName && newName.trim() !== "") {
                listItem.firstChild.textContent = newName.trim();
            }
        };

        listItem.appendChild(deleteButton);
        listItem.appendChild(editButton);
        document.getElementById('todoList').appendChild(listItem);
        
        Input.value = '';
    } else {
        alert('Please enter an item name!');
    }
}

// Logout function
function logout() {
    localStorage.removeItem("isLoggedIn");
    document.getElementById("todo-container").style.display = "none";
    document.getElementById("login-container").style.display = "block";
}