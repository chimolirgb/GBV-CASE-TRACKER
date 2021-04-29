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
     $("#2").show();
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