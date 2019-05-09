// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {

    $(".addBurgerForm").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log("pressed");
        var newBurger = {
            name: $("#burgerAddText").val().trim(),
        };

        console.log(newBurger);
        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Added new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".eatBurger").on("click", function (event) {
        var id = $(this).attr("id");
        $(this).attr("data-devoured", true);
        var devoured = $(this).data("devoured");

        var eatenBurger = {
            devoured: devoured
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: eatenBurger
        }).then(
            function () {
                console.log(id + " changed to devoured");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
