$(function () {
    var $fields = $('.field');
    $fields.hover(
        function(){
            $(this).next().css('display', 'inline-block')
            $(this).next().show(2000);
        },function(){
            $(this).next().hide();
        });

    var $button = $('.button');

    $button.on('click', function (e) {
        e.preventDefault();
        var $field = $('.field-type');
        console.log('ggg = '+$field);
        $field.css('display', 'inline-block');
    });
});