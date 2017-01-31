var userNameClass = "user-name",
    birthdayClass = "birthday",
    occupationClass = "occupation",
    addressClass = "address",
    optionsClass = "options",
    table = document.getElementsByClassName("user-table")[0];

var xhr = new XMLHttpRequest();
xhr.open("get", "/dataJan-28-2017.json");

xhr.addEventListener("readystatechange", function() {
    if(this.readyState !== 4) {
        return;
    }

    renderTableRows(JSON.parse(this.responseText));
});

xhr.send();

function renderTableRows(rowsData) {

    for (var i in rowsData) {
        table.appendChild(getTableRow(rowsData[i]));
    }
}


function getTableRow(rowData) {
    var row = document.createElement("tr");

    var name = document.createElement("td");
    name.className = userNameClass;
    name.textContent = rowData.userName;

    var birthday = document.createElement("td");
    birthday.className = birthdayClass;
    birthday.textContent = rowData.birthDay;

    var occupation = document.createElement("td");
    occupation.className = occupationClass;
    occupation.textContent = rowData.occupation;

    var address = document.createElement("td");
    address.className = addressClass;
    address.textContent = rowData.address;

    var options = document.createElement("td");
    options.className = optionsClass;

    row.appendChild(name);
    row.appendChild(birthday);
    row.appendChild(occupation);
    row.appendChild(address);
    row.appendChild(options);

    var removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.className = "removeBtn";
    options.appendChild(removeBtn);

    var icon = document.createElement("i");
    icon.className = "fa fa-trash";
    removeBtn.appendChild(icon);

    return row;
}

table.addEventListener("click", function(e) {
    var removeBtn = document.getElementsByClassName("removeBtn")[0];

    if(e.target == removeBtn) {
        var rowToRemove = e.target.parentElement.parentElement;
        rowToRemove.parentElement.removeChild(rowToRemove);
    }
});