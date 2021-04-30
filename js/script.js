$(document).ready(function(){
  $("#1").click(function(){
      $("#saf").show();
      $("#1").hide();  
  });
  $("#saf").click(function(){
     $("#1").show();
     $("#saf").hide();
 });
 
 $("#2").click(function(){
     $("#volunt").show();
     $("#2").hide(); 
 });
 $("#volunt").click(function(){
     $("#2").show().css("opacity","0.6");
     $("#volunt").hide(); 
 
 });
 $("#3").click(function(){
     $(".legal").show();
     $("#3").hide();  
 });
 $(".legal").click(function(){
    $("#3").show();
    $(".legal").hide();
 });
 $("#4").click(function(){
  $(".train").show();
  $("#4").hide(); 
 }); 
  $(".train").click(function(){
    $("#4").show();
    $(".train").hide();
});

 });




  function safePlace(){
    location.href = ("index.html");
  };
  function Donations(){
    location.href = ("index.html");
  };

  function legalHelp(){
    location.href = ("index.html");
  };
  function volunteers(){
    location.href = ("index.html");
  };

  (function ($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = 'EMAIL';
    ftypes[0] = 'email';
    fnames[1] = 'AGE';
    ftypes[1] = 'text';
    fnames[2] = 'NAME';
    ftypes[2] = 'text';
}(jQuery));
var $mcj = jQuery.noConflict(true);