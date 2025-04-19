

$(document).ready(function () {

    function showMessage(type, message) {
        var box = $("#message-box");
        box.removeClass("alert-success alert-danger").addClass("alert-" + type);
        box.text(message).fadeIn();

        setTimeout(function () {
            box.fadeOut();
        }, 5000)
    }

    $(".editable").on("blur", function () {
        var row = $(this).closest("tr");
        var id = row.attr("data-id");
        var field = $(this).attr("data-field");
        var value = $(this).text();


        $.post("/Usuario/Update", { id: id, field: field, value: value },
            function (response) {
                if (response.success) {
                    showMessage("success", "Alteração salva com sucesso!");
                }
                else {
                    showMessage("danger", "Alteração com erro!");
                }
            }.fail(function () {
                showMessage("danger", "Erro na comunicação com o servidor");
            })
        )
    })

    $(document).on("click", ".btn-delete", function () {
        var row = $(this).closest("tr");
        var id = row.attr("data-id");

        $.post("/Usuario/Delete", { id: id }, function (response) {
            if (response.success) {
                row.remove();
                showMessage("success", "Usuário removido com sucesso!")
            }
            else {
                showMessage("danger", "Erro ao remover usuário")
            }
        }).fail(function () {
            showMessage("danger", "Erro na comunicação com o servidor");
        })
    })

    $(document).on("click", ".btn-add", function () {
        var row = $("#newUserRow")

        var user = {
            Nome: row.find("td:eq(0)").text(),
            Sobrenome: row.find("td:eq(1)").text(),
            Email: row.find("td:eq(2)").text(),
            Telefone: row.find("td:eq(3)").text(),
            Endereco: row.find("td:eq(4)").text(),
            Empresa: row.find("td:eq(5)").text(),
        }

        $.post("/Usuario/Add", user, function (response) {
            if (response.success) {
                showMessage("success", "Usuário cadastrado com sucesso!")

                var newRow = "<tr data-id='" + response.userId + "' >" +
                    "<td contenteditable='true' class='editable' data-field='Nome'>" + user.Nome + "</td>" +
                    "<td contenteditable='true' class='editable' data-field='Sobrenome'>" + user.Sobrenome + "</td>" +
                    "<td contenteditable='true' class='editable' data-field='Email'>" + user.Email + "</td>" +
                    "<td contenteditable='true' class='editable' data-field='Telefone'>" + user.Telefone + "</td>" +
                    "<td contenteditable='true' class='editable' data-field='Endereco'>" + user.Endereco + "</td>" +
                    "<td contenteditable='true' class='editable' data-field='Empresa'>" + user.Empresa + "</td>" +
                    "<td><button class='btn btn-danger btn-sm btn-delete'>Remover</button></td>" +
                    "</tr>";

                $("table tbody").append(newRow);

                $("#newUserRow").remove();

                var rowEmpty = "<tr data-id='newUserRow' >" +
                    "<td contenteditable='true' class='new-data'></td>" +
                    "<td contenteditable='true' class='new-data'></td>" +
                    "<td contenteditable='true' class='new-data'></td>" +
                    "<td contenteditable='true' class='new-data'></td>" +
                    "<td contenteditable='true' class='new-data'></td>" +
                    "<td contenteditable='true' class='new-data'></td>" +
                    "<td><button class='btn btn-success btn-sm btn-add'>Adicionar</button></td>" +
                    "</tr>"

                $("table tbody").append(rowEmpty);

            } else {
                showMessage("danger", "Erro ao cadastrar usuário!")
            }
        }).fail(function () {
            showMessage("danger", "Erro na comunicação com o servidor");
        })
    })
})
