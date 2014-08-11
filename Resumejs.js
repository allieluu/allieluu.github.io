$(document).ready(function() {
    
    $('.tabs li').click(function(){
    
        if (!$(this).hasClass('selected')) {
    
            $('.tabs li').removeClass('selected');
    
            $(this).addClass('selected');
    
            var selectionId = $(this).attr('id');
    
            $('div .page').css('display', 'none');
    
            $('div .page#'+selectionId).css('display', 'block');}
}); 
});