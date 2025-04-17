

$(document).ready(function () {
    $(".editable").on("blur", function () {
        var row = $(this).closest("tr");
        var id = row.attr("data-id");
        var field = $(this).attr("data-field");
        var value = $(this).text();


        $.post("/Usuario/Update", { id: id, field: field, value: value} )


    })
})
