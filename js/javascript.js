$(function()
  {
  $("#work").hide();
   $(".portfolio").hide();
   $(".labels").hide();

  $( window ).scroll(function()
     {  
    if($(this).scrollTop()>250){
         $("#work").slideDown("slow"); 
      }
    if($(this).scrollTop()>800){
      $(".portfolio").fadeIn("slow");
      }  
   if($(this).scrollTop()>1400){
      $(".profile .profile-left").addClass("animate");
      $(".profile .profile-right").addClass("animate-reverse");

   }
   });


   
  $( ".col-md-4>i" ).hover(function() {
      $(this).animate({width:75
         , height:75,fontSize:"3.5em"});}
      ,function() {
         $(this).animate({width:57
            , height:57,fontSize:"2.5em"});
       });

      $("input").click(function(){
         $(this).attr("placeholder","");
      });
         $("#Nameinput").blur(function(){
            if($("#Nameinput").val()==""){
            $(this).css("border-color","red");
            $(this).css("boxShadow"," 0px 0px 3px  red");
          $("#Namelabel").show();
          }
         });
         $("#subject").blur(function(){
            if($("#subject").val()==""){
            $(this).css("border-color","red");
            $(this).css("boxShadow"," 0px 0px 3px  red");
          $("#subjectLabel").show();
         }
      });
      $("#Emailaddress").blur(function(){
         if($("#Emailaddress").val()==""){
         $(this).css("border-color","red");
         $(this).css("boxShadow"," 0px 0px 3px  red");
       $("#EmailLabel").show();
      }
   });
   $("#massege").blur(function(){
      if($("#massege").val()==""){
      $(this).css("border-color","red");
      $(this).css("boxShadow"," 0px 0px 3px  red");
    $("#MassegeLabel").show();
   }
});

            });