$(document).ready(function () {

  $("#btn-cars").click(function () {
    console.log("Cars");
    $("#myCarousel1").show();
    $("#myCarousel2").hide();
    $("#panel-cars").show();
    $("#panel-motors").hide();
  });
  
  $("#btn-motors").click(function () {
    console.log("motors");
    $("#myCarousel2").show();
    $("#myCarousel1").hide();
    $("#panel-motors").show();
    $("#panel-cars").hide();
  });

})