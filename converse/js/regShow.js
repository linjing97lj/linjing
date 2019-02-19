
window.onload = function(){

   $(".enterBox").hide();
   $(".enrollBox").hide();
   $(".function").hide();


   $(".headBox-enter").toggle(
       function () {
           $(".function").fadeIn(2000);
           $(".function").slideDown();
           $(".enterBox").fadeIn(2000);
           $(".enterBox").show();
           $(".enrollBox").hide();
       },
        function () {
           $(".enterBox").fadeIn(2000);
           $(".enrollBox").hide();
       }
   );


   $(".headBox-enroll").toggle(
       function () {
           $(".function").fadeIn(2000);
           $(".function").slideDown();
           $(".enrollBox").fadeIn(2000);
           $(".enterBox").hide();
           $(".enrollBox").show();
       },
        function () {
           $(".enrollBox").fadeIn(2000);
           $(".enterBox").hide();
       }
   );




  
   $(".headBox-img").toggle(
       function () {
           $(".function").fadeIn(2000);
           $(".function").slideDown();
           $(".enterBox").show();
           $(".enrollBox").hide();
       },
        function () {
           $(".function").fadeIn(2000);
           $(".function").slideUp();
           $(".enterBox").show();
           $(".enrollBox").hide();
       }
   );



}








