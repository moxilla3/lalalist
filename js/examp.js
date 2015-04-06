@charset "UTF-8";
/* CSS Document */

$(document).ready(function () {
    //enter will click add
    $('.I').keyup(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $('.add').click();
        }
    });
    //add item
    $('button.add').click(function () {
        if ($('.I').val().trim().length === 0) {
            $("#error").show();
        } else {
            $('ul').append('<i class="fa fa-wrench"></i><li class="item">' + '<p> ' + $('.I').val() + '</p>' + '<i class="fa fa-trash "></i></li>');
        }
    });
    //add item:
    $('ul').on('click', 'p', function (event) {
        event.preventDefault();
        $(this).closest('li').toggleClass('strike');
        $(this).find('i:last-child').toggleClass('fa-trash').toggleClass('fa-trash-o');
    });
    //remove item:
    $('ul').on('click', '.trash', function (event) {
        event.preventDefault();
        $(this).closest('li').remove();
    });
    //edit item 
    $('ul').on('click', '.wrench', function (event) {
        event.preventDefault();
        var text = $(this).next('p').text();
        $(this).closest('li').append('<input value="' + text + '" type="text"><div><i class="fa fa-check"></i><div>');
    });
    $('ul').on('keyup', 'input', function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            edit($(this));
        }
    });

    $('ul').on('click', '.fa-check', function (event) {
        edit($(this));
    });

    function edit(element) {
        var $this = element.closest('li');
        var text = $this.find('input').val();
        $this.find('p').text(text);
        $this.find('input').remove();
        $this.find('div').remove();
    }
});