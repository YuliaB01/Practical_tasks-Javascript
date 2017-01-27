var button = document.getElementById("AddButton");
var form = document.forms.KGBForm;


button.addEventListener("click", function(e) {
    e.preventDefault();
    var newDiv = document.createElement("div");
    newDiv.id = "formDiv";

    var fullNameLabel = document.createElement("label");
    fullNameLabel.innerText = "Full name:";
    var fullName = document.createElement("input");
    fullName.type = "text";
    fullName.id = "fName";
    fullNameLabel.appendChild(fullName);

    var addressLabel = document.createElement("label");
    addressLabel.innerText = "Address:";
    var address = document.createElement("input");
    address.type = "text";
    address.id = "Address";
    addressLabel.appendChild(address);

    var checkboxLabel = document.createElement("label");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkboxLabel.appendChild(checkbox);

    var removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.id = "removeBtn";
    newDiv.appendChild(fullNameLabel);
    newDiv.appendChild(addressLabel);
    newDiv.appendChild(checkboxLabel);
    newDiv.appendChild(removeButton);

    form.insertBefore(newDiv, form.childNodes[0]);


    checkbox.addEventListener("change", function() {
        if(this.checked) {
            newDiv.style.backgroundColor = "#f75947";
        } else {
            newDiv.style.backgroundColor = "transparent";
        }
    });

    removeButton.addEventListener("click", function(e) {

        var removeDiv = e.target.parentElement;
        removeDiv.parentElement.removeChild(removeDiv);

    });

});

form.addEventListener("submit", function(e) {
    var addressInput = document.getElementById("Address");
    var fullNameInput = document.getElementById("fName");

    if(addressInput.value.trim() == "" || fullNameInput.value.trim() == "") {
        e.preventDefault();
        return false;
    } else {
        return true;
    }

});