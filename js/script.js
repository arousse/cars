$(document).ready(function () {

    $("#btn-Cars").click(function () {
        $("#myCarousel1").show();
        $("#myCarousel2").hide();
    });


    $("#btn-motors").click(function () {
        $("#myCarousel2").show();
        $("#myCarousel1").hide();
    });

})