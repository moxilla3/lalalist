$(document).ready(function () {

    $("#submit").on("click", function(event) {
  event.preventDefault();
  var item = $("#item").val();
  $("#list").prepend("<li><button class='remove'>X</button>"+item+"</li>");

  //trying to reset form field
  // $('#item').each (function(){
  //this.reset();
  //

    });


    $('#list').on('click', 'li', function () {
        $(this).toggleClass('checked');
    });

    $('#list').on('click', '.remove', function () {
        $(this).closest('li').remove();
    });

    $('#clear').on('click', function () {
        $('.checked').remove();
    });

   
//to fix the double entries

    //$('#item').keydown(function (e) {
       // if (e.which == 13) {
            //var item = $("#item").val();
            

           // $('#list').prepend('<li><button class="remove">X</button>'+item+'</li>');
       // }
    //});




});