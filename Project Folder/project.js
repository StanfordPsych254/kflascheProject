// Onload function (controls moving between slides)

// Set condition
$(function() {
  $('#age-box').filter_input({regex:'[0-9]'});

  var CONDITION = Math.floor(Math.random() * 2);
  var a;

  //Instructions Slide
  $('.start-button').click(function(event) {
    $('#instructions').addClass('hidden');
    $('#condition-' + CONDITION).removeClass('hidden');
    a = new Date();
  });

  // Start of condition 0 (God)
  $('#page1-god-next').click(function(event) {
    $('#condition-0').addClass('hidden');
    $('#page2-god').removeClass('hidden');
    time = (new Date() - a)/1000;
  });

  $('#page2-god-next').click(function(event) {
    var completed = true;

//Add to each slide where I want it
    if (
      !$("input:radio[name='god']:checked").val() ||
      !$('#god-thoughts').val() ||
      !$('#god-attncheck').val()
    ) {
      $('.error').removeClass('hidden');
      completed = false;
      window.scrollTo(0,0);
    }
    //End

    if (completed) { //add this
      $('#page2-god').addClass('hidden');
      $('#transition').removeClass('hidden');
      $('.error').addClass('hidden'); //add this
    }

  });
  // End of condition 0 (God)

  // Start of condition 1 (Control)
  $('#page1-control-next').click(function(event) {
    $('#condition-1').addClass('hidden');
    $('#page2-control').removeClass('hidden');
    time = (new Date() - a)/1000;
  });

  $('#page2-control-next').click(function(event) {
    $('#page2-control').addClass('hidden');
    $('#transition').removeClass('hidden');
  });
  // End of condition 1 (Control)

  //Transition Slide
  $('#transition-next').click(function(event) {
    $('#transition').addClass('hidden');
    $('#motorcycle').removeClass('hidden');
  });

  //Scenario 1: Motorcycle
  $('#motorcycle-next').click(function(event) {
    window.scrollTo(0,0);
    $('#motorcycle').addClass('hidden');
    $('#wildernesscamping').removeClass('hidden');
  });

  //Scenario 2: Wilderness Camping
  $('#wildernesscamping-next').click(function(event) {
    window.scrollTo(0,0);
    $('#wildernesscamping').addClass('hidden');
    $('#skiing').removeClass('hidden');
  });

  //Scenario 3: Skiing
  $('#skiing-next').click(function(event) {
    window.scrollTo(0,0);
    $('#skiing').addClass('hidden');
    $('#believe-god').removeClass('hidden');
  });

  //Do you believe in God?
  $('#believe-god-next').click(function(event) {
    $('#believe-god').addClass('hidden');
    $('#final-questions').removeClass('hidden');
  });

  //Demographics
  $('#submit').click(function(event) {
    var completed = true;
    var answered = true;

    if (!$("input:radio[name='gender']:checked").val() ||
        !$("input:radio[name='english']:checked").val() ||
        !$('#age-box').val()) {
      answered = false;
    }

    if (!answered) {
      completed = confirm('There are unanswered questions on this page. Are you sure you want to continue?');
    }

    if (completed) {
      $('#final-questions').addClass('hidden');
      $('#thankyou').removeClass('hidden');
    }
  });

})
