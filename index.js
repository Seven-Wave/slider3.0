$(document).ready(function (){

    $('.slider').slick({
        arrows: false,
        dots: true,
        // adaptiveHeight: true,
    })
    $(".title__button").click(function(e){
        e.preventDefault()
        slideIndex = $(this).attr('data-slick-index')
        console.log(parseInt(slideIndex))
        let slider = $('.slider')
        slider[0].slick.slickGoTo( parseInt(slideIndex) )
    })

    $(".back_to_title_button").click(function(e){
        let slider = $('.slider')
        slider[0].slick.slickGoTo(0)
    })

    $('.slider__card').click(function () {
        $('.overview').css({
            'transform': 'translateY(0)'
        })

        $(this).css({
            'opacity' : '0'
        })

    })


    $('.close').click(function () {
        $('.overview').css({
            'transform': 'translateY(100%)'
        })

        $('.slider__card').css({
            'opacity' : '1'
        })
    })


})

// {
//     ["ID"]=>
//     string(7) "4080514"
//     ["NAME"]=>
//     string(52) "традиционный тайский массаж"
//     ["DETAIL_PICTURE"]=>
//     string(5) "44825"
//     ["DETAIL_TEXT"]=>
//     string(866) "Традиционный тайский массаж известен под несколькими названиями: тайский массаж, тайская йога, «нуат пэн боран» (Nuat phaen boran), пассивная йога и другие. По своей сути этот массаж состоит из двух составляющих, умело объединенных в одно целое. Это акупрессура – воздействие на проблемные места через давление на определённые точки тела (своего рода разновидность рефлексотерапии) и совокупность упражнений, позаимствованных из практики йогов, таких как скручивания и растяжки."
//     ["IBLOCK_SECTION_ID"]=>
//     string(4) "1073"
//     ["PROPERTY_DURATION_VALUE"]=>
//     array(3) {
//     [0]=>
//     string(2) "60"
//         [1]=>
//     string(2) "90"
//         [2]=>
//     string(3) "120"
// }