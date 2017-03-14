$(function () {

    var $tabs = $('.tab');
    var $paragraph1 = $('.paragraph-one');
    var $paragraph2 = $('.paragraph-two');
    var $paragraph3 = $('.paragraph-three');
    console.log($tabs);
    $tabs.on('click', function () {
        var $activeTab = $('.active-tab');
        $activeTab.removeClass('active-tab');
        $(this).addClass('active-tab');

        if ($(this).attr('id')=='tab1'){
            $paragraph1.css('display', 'block');
            $paragraph2.css('display', 'none');
            $paragraph3.css('display', 'none');
        }

        if ($(this).attr('id')=='tab2'){
            $paragraph2.css('display', 'block');
            $paragraph1.css('display', 'none');
            $paragraph3.css('display', 'none');
        }

        if ($(this).attr('id')=='tab3'){
            $paragraph3.css('display', 'block');
            $paragraph2.css('display', 'none');
            $paragraph1.css('display', 'none');
        }
    });

});