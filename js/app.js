$(document).ready(function () {
   
    //enter will click add
    $('.listItem').keyup(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $('.add').click();
        }
    });



//add item
    $('button.addListItemBtn').click(function () {
        if ($('.listItem').val().trim().length === 0) {
            $("#error").show();
        } else {
            $('ul').append('<p> ' + $('.listItem').val() + '</p>' + '<i class="fa fa-minus-circle "></i></li>');
        }
    });
    //add item:
    $('ul').on('click', 'p', function (event) {
        event.preventDefault();
        $(this).closest('li').toggleClass('strike');
        $(this).find('i:last-child').toggleClass('fa-trash').toggleClass('fa-trash-o');
    });







 });