$(document).ready(function() {
    var userNameClass = "fullName",
        userProfessionClass = "profession",
        shortInfoClass = "info",
        optionsClass = "options",
        $table = $("#users-table"),
        $btnCreate = $("#create"),
        $cancelBtn = $("#cancel"),
        $form = $("form[name='users-edit']"),
        nativeForm = $form.get(0); // HTMLFormElement

    function Request() {}
    Request.execute = function(url, callback, method, data) {
        $.ajax({
            url: url,
            type: method,
            data: JSON.stringify(data),
            contentType: "application/json",
            success: callback
        });
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
        var $countries = $("#country");

        for(var i in countriesJson) {
            var $option = $("<option>");
            $option.text(countriesJson[i]);
            $countries.append($option);
        }
    }

    Request.get("/user", renderTableRows);

    function renderTableRows(rowsData) {
        for (var i in rowsData) {
            $table.append(getTableRow(rowsData[i]));
        }
    }

    function createCell(textContent, className, row) {
        var $td = $("<td>");
        $td.addClass(className);
        $td.text(textContent);
        row.append($td);
    }

    function createButton(textContent, className, iconClassName) {
        var $btn = $("<button>");
        $btn.addClass(className);
        $btn.text(textContent);

        var $icon = $("<i>");
        $icon.addClass(iconClassName);
        $btn.append($icon);

        return $btn;
    }

    function getTableRow(rowData) {
        var $row = $("<tr>");
        $row.attr("id", rowData.id);

        createCell(rowData.fullName, userNameClass, $row);
        createCell(rowData.profession, userProfessionClass, $row);
        createCell(rowData.shortInfo, shortInfoClass, $row);

        var $options = $("<td>");
        $options.addClass(optionsClass);
        $row.append($options);

        var $removeBtn = createButton("Remove", "removeBtn", "fa fa-trash");
        $options.append($removeBtn);

        handleRemoveRow($removeBtn, rowData);

        var $editBtn = createButton("Edit", "editBtn", "fa fa-pencil-square-o");
        $options.append($editBtn);

        handleUserEdit($editBtn, rowData);

        return $row;
    }

    function handleRemoveRow(btn, item) {
        btn.click(function() {
            Request.delete("/user?id=" + item.id, removeUser);

            function removeUser() {
                btn.parents("tr").remove();
            }
        });
    }

    function clearFormInputs(target) {
        target.find(":input").val("");
    }

    $btnCreate.click(function() {
        clearFormInputs($form);
        showDialog();
    });

    $cancelBtn.click(function(e) {
        e.preventDefault();
        clearFormInputs($form);
        hideDialog();
    });

    function handleUserEdit(btn, item) {
        btn.click(function() {
            Request.get("/user?id=" + item.id, editUser);

            function editUser(userToEdit) {
                nativeForm.id.value = userToEdit.id;
                nativeForm.fullname.value = userToEdit.fullName;
                nativeForm.birthday.value = userToEdit.birthday;
                nativeForm.profession.value = userToEdit.profession;
                nativeForm.address.value = userToEdit.address;
                nativeForm.country.value = userToEdit.country;
                nativeForm["short-info"].value = userToEdit.shortInfo;
                nativeForm["full-info"].value = userToEdit.fullInfo;
            }

            showDialog();
        });
    }

    $form.submit(function(e) {
        var idElement = this.elements.id;

        e.preventDefault();

        if(idElement.value) {
            var user = {
                id: nativeForm.id.value,
                fullName: nativeForm.fullname.value,
                birthday: nativeForm.birthday.value,
                profession: nativeForm.profession.value,
                address: nativeForm.address.value,
                country: nativeForm.country.value,
                shortInfo: nativeForm["short-info"].value,
                fullInfo: nativeForm["full-info"].value
            };

            Request.put("/user", updateUser, user);

            function updateUser(userToUpdate) {
                var $rowToUpdate = $("#" + userToUpdate.id);

                $rowToUpdate.find(".fullName").text(userToUpdate.fullName);
                $rowToUpdate.find(".profession").text(userToUpdate.profession);
                $rowToUpdate.find(".info").text(userToUpdate.shortInfo);

                return updateUser;
            }
        } else {
            var newUser = {
                fullName: nativeForm.fullname.value,
                birthday: nativeForm.birthday.value,
                profession: nativeForm.profession.value,
                address: nativeForm.address.value,
                country: nativeForm.country.value,
                shortInfo: nativeForm["short-info"].value,
                fullInfo: nativeForm["full-info"].value
            };

            Request.post("/user", createUser, newUser);

            function createUser(user) {
                $table.append(getTableRow(user));
            }
        }

        hideDialog();
    });

    function showDialog() {
        $form.removeClass("users-edit-hidden");
        $("#overlay").addClass("overlay");
    }

    function hideDialog() {
        $form.addClass("users-edit-hidden");
        $("#overlay").removeClass("overlay");
    }

    $(document).on("keyup", function(e) {
        if(e.keyCode == 27 && isDialogShown()) {
            hideDialog();
        }
    });

    function isDialogShown() {
        if($form.hasClass("users-edit-hidden")) {
            return false;
        }
        return true;
    }

});
