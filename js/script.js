$(function() {


    // $('.item').mouseover(function() {
    //     $(this).addClass('item_active')
        
    // })
    // $('.item').mouseout(function() {
    //     $(this).removeClass('item_active')
    // })    

    $('.item').hover(function() {
        $(this).toggleClass('item_active')
    })

})