$(function() {


    $('.item').mouseover(function() {
        $(this).addClass('item_active')
        
    })
    $('.item').mouseout(function() {
        $(this).removeClass('item_active')
    })    

})