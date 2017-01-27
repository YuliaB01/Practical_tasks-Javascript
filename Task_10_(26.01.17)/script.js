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
    fullName.name = "Input";
    fullNameLabel.appendChild(fullName);

    var addressLabel = document.createElement("label");
    addressLabel.innerText = "Address:";
    var address = document.createElement("input");
    address.type = "text";
    address.name = "Address";
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
    for(var i = 0; i < form.elements.length; i++) {
        if(form.elements[i].name && !form.elements[i].value) {
            e.preventDefault();
            break;
        }
    }
});
