
// onload function
$(function() {
  var CONDITION = Math.floor(Math.random() * 2);



  $('.start-button').click(function(event) {
    $('#instructions').addClass('hidden');
    $('#condition-' + CONDITION).removeClass('hidden');
  });

  $('#god-next').click(function(event) {
    $('#condition-0').addClass('hidden');
    $('#god-page-2').removeClass('hidden');
  });

})