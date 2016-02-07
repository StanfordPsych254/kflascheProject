// Onload function (controls moving between slides)

// Set condition
$(function() {
  var CONDITION = Math.floor(Math.random() * 2);

  $('.start-button').click(function(event) {
    $('#instructions').addClass('hidden');
    $('#condition-' + CONDITION).removeClass('hidden');
  });

  // Start of condition 0 (God)
  $('#page1-god-next').click(function(event) {
    $('#condition-0').addClass('hidden');
    $('#page2-god').removeClass('hidden');
  });

  $('#page2-god-next').click(function(event) {
    $('#page2-god').addClass('hidden');
    $('#transition').removeClass('hidden');
  });
  // End of condition 0 (God)

  // Start of condition 1 (Control)
  $('#page1-control-next').click(function(event) {
    $('#condition-1').addClass('hidden');
    $('#page2-control').removeClass('hidden');
  });

  $('#page2-control-next').click(function(event) {
    $('#page2-control').addClass('hidden');
    $('#transition').removeClass('hidden');
  });
  // End of condition 1 (Control)

  $('#transition-next').click(function(event) {
    $('#transition').addClass('hidden');
    $('#motorcycle').removeClass('hidden');
  });

})
