$(document).ready(function () {

    $("#btn-cars").click(function () {
        console.log("Cars");
        $("#myCarousel1").show();
        $("#myCarousel2").hide();
    });


    $("#btn-motors").click(function () {
        console.log("motors");
        $("#myCarousel2").show();
        $("#myCarousel1").hide();
    });

})