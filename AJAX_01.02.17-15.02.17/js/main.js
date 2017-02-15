var userNameClass = "fullName",
    userProfessionClass = "profession",
    shortInfoClass = "info",
    optionsClass = "options",
    table = document.getElementById("users-table"),
    btnCreate = document.getElementById("create"),
    cancelBtn = document.getElementById("cancel"),
    form = document.forms["users-edit"];

function Request() {} // var Request = {}
Request.execute = function(url, callback, method, data) {
    var xhr = new XMLHttpRequest();

    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.responseType = "json";
    xhr.addEventListener("readystatechange", function() {
        if(this.readyState !== 4) {
            return;
        }

        callback(this.response);
    });

    var dataToSend = null;

    if(data) {
        dataToSend = JSON.stringify(data);
    }

    xhr.send(dataToSend);
};

Request.get = function(url, callback) {
    Request.execute(url, callback, "get");
};

Request.post = function(url, callback, data) {
    Request.execute(url, callback, "post", data);
};

Request.put = function(url, callback, data) {
    Request.execute(url, callback, "put", data);
};

Request.delete = function(url, callback) {
    Request.execute(url, callback, "delete");
};

Request.get("/countries", getCountries);

function getCountries(countriesJson) {
    var countries = document.getElementById("country");

    for(var i in countriesJson) {
        var option = document.createElement("option");
        option.textContent = countriesJson[i];
        countries.appendChild(option);
    }
}

Request.get("/user", renderTableRows);

function renderTableRows(rowsData) {
    for (var i in rowsData) {
        table.appendChild(getTableRow(rowsData[i]));
    }
}

function createCell(textContent, className, row) {
    var td = document.createElement("td");
    td.className = className;
    td.textContent = textContent;
    row.appendChild(td);
}

function createButton(textContent, className, iconClassName) {
    var btn = document.createElement("button");
    btn.textContent = textContent;
    btn.className = className;
    btn.type = "button";

    var icon = document.createElement("i");
    icon.className = iconClassName;
    btn.appendChild(icon);

    return btn;
}

function getTableRow(rowData) {
    var row = document.createElement("tr");
    row.id = rowData.id;

    createCell(rowData.fullName, userNameClass, row);
    createCell(rowData.profession, userProfessionClass, row);
    createCell(rowData.shortInfo, shortInfoClass, row);

    var options = document.createElement("td");
    options.className = optionsClass;
    row.appendChild(options);

    var removeBtn = createButton("Remove", "removeBtn", "fa fa-trash");
    options.appendChild(removeBtn);

    handleRemoveRow(removeBtn, rowData);

    var editBtn = createButton("Edit", "editBtn", "fa fa-pencil-square-o");
    options.appendChild(editBtn);

    handleUserEdit(editBtn, rowData);

    return row;
}

function handleRemoveRow(btn, item) {
    btn.addEventListener("click", function() {
        Request.delete("/user?id=" + item.id, removeUser);

        function removeUser() {
            var removeUser = btn.parentElement.parentElement;
            removeUser.parentElement.removeChild(removeUser);
        }
    });
}

function clearFormInputs(target) {
    for(var i = 0; i < target.elements.length; i++) {
        target.elements[i].value = "";
    }
}

btnCreate.addEventListener("click", function() {
    clearFormInputs(form);
    showDialog();
});

cancelBtn.addEventListener("click", function(e) {
    e.preventDefault();
    clearFormInputs(form);
    hideDialog();
});

function handleUserEdit(btn, item) {
    btn.addEventListener("click", function() {
        Request.get("/user?id=" + item.id, editUser);

        function editUser(userToEdit) {
            form.id.value = userToEdit.id;
            form.fullname.value = userToEdit.fullName;
            form.birthday.value = userToEdit.birthday;
            form.profession.value = userToEdit.profession;
            form.address.value = userToEdit.address;
            form.country.value = userToEdit.country;
            form["short-info"].value = userToEdit.shortInfo;
            form["full-info"].value = userToEdit.fullInfo;
        }

        showDialog();
    });
}

form.addEventListener("submit", function(e) {
   var idElement = this.elements.id;

   e.preventDefault();

   if(idElement.value) {
       var user = {
           id: form.id.value,
           fullName: form.fullname.value,
           birthday: form.birthday.value,
           profession: form.profession.value,
           address: form.address.value,
           country: form.country.value,
           shortInfo: form["short-info"].value,
           fullInfo: form["full-info"].value
       };

       Request.put("/user", updateUser, user);

       function updateUser(userToUpdate) {
           var rowToUpdate = document.getElementById(userToUpdate.id);
           rowToUpdate.children[0].textContent = userToUpdate.fullName;
           rowToUpdate.children[1].textContent = userToUpdate.profession;
           rowToUpdate.children[2].textContent = userToUpdate.shortInfo;
       }
   } else {
       var newUser = {
           fullName: form.fullname.value,
           birthday: form.birthday.value,
           profession: form.profession.value,
           address: form.address.value,
           country: form.country.value,
           shortInfo: form["short-info"].value,
           fullInfo: form["full-info"].value
       };

       Request.post("/user", createUser, newUser);

       function createUser(user) {
           table.appendChild(getTableRow(user));
       }
   }

   hideDialog();
});

function showDialog() {
    form.classList.remove("users-edit-hidden");
    document.getElementById("overlay").classList.add("overlay");
}

function hideDialog() {
    form.classList.add("users-edit-hidden");
    document.getElementById("overlay").classList.remove("overlay");
}

document.addEventListener("keyup", function(e) {
   if(e.keyCode == 27 && isDialogShown()) {
       hideDialog();
   }
});

function isDialogShown() {
    if(form.classList.contains("users-edit-hidden")) {
        return false;
    }
    return true;
}