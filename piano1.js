$(document).ready(function(){

  $('li').click(function() {

      $('#'+$(this).data('note')).prop('currentTime',0);

      $('#'+$(this).data('note'))[0].play();

})

})