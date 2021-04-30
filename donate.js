let bname = document.querySelector("submit");
bname=addEventListener("submit",fname);



function fname(){
    alert("Thank you for the donations!");
}
//DONATIONS
// business logic

function Contact(firstName, lastName, phone,email, location){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.email = email
    this.location = [];
  };

  
  function Location(country, town){
    this.country = country;
    this.town = town;
  }
  
  Location.prototype.Address = function(){
    return this.country +","+ this.town
  }
  
  
  // user logic
  
  $(document).ready(function(){
    $("#contact").submit(function(event){
      event.preventDefault();
      let firstName = $("input#firstName").val();
      let lastName = $("input#surName").val();
      let phone = parseInt($("input#phone").val());
      let country = $("input#country").val();
      let town = $("input#town").val();
      let email = $("input#email").val();
  
      let newContact = new Contact(firstName, lastName, phone,email, location);
      let newAddress = new Location(country, town);
  
      newContact.location.push(newAddress);
  
      $("#diplay-contacts").toggle(1000);
      $("#detail").append("<li class='view-more'>"+ newContact.firstName +"</li>")
  
      $(".view-more").last().click(function(){
        $("#moreDetails").slideToggle(1000);
        $(".fname").text(newContact.firstName);
        $(".sname").text(newContact.lastName);
        $(".tele").text(newContact.phone);
  
        $(".country").text(newContact.location[0].country);
        $(".twn").text(newContact.location[0].town);
      })
    })

    // $( "#li" ).click(function() {
    //   $("#health").show()
    // });
  

  });

