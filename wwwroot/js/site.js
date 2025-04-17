

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

    $(document).on("click", ".btn-delete", function () {
})
