$(document).ready(function () {
    $(".eat-change").click(function () {
        var id = $(this).data("id");
        var devourChanger = $(this).data("eaten");
        var devourChanging = {
            devoured: devourChanger
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devourChanging
        })
        .then(function (res) {
            console.log(res);
            
            if (res.statusCode = 200) {
                location.reload();
            }
        })
    });

    $("#add-burger").click(function () {
        var newBerg = {
            burgerName: $("#new-burger").val().trim()
        };
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBerg
        }).then(function (res) {
            console.log(res);
            if(res.statusCode = 200) {
            location.reload();
            }
        });
    });
});