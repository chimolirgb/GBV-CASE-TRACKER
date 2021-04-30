



$(document).ready(function(e){
    e.preventDefault;
    $(".navbar").click(function(){
        $(".navbar").hide();
        $(".navbar").show();
    });
    $("#vila").hover( function(){
        $("#vila").hide();
    });
    $("#project> li:first").css("color", "green");


});