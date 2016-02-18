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

    if (
      !$("input:radio[name='god']:checked").val() ||
      !$('#god-thoughts').val() ||
      !$('#god-attncheck').val()
    ) {
      $('.error').removeClass('hidden');
      completed = false;
      window.scrollTo(0,0);
    }

    if (completed) {
      $('#page2-god').addClass('hidden');
      $('#transition').removeClass('hidden');
      $('.error').addClass('hidden');
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
    var completed = true;

    if (
      !$("input:radio[name='control']:checked").val() ||
      !$('#control-thoughts').val() ||
      !$('#control-attncheck').val()
    ) {
      $('.error').removeClass('hidden');
      completed = false;
      window.scrollTo(0,0);
    }

    if (completed) {
    $('#page2-control').addClass('hidden');
    $('#transition').removeClass('hidden');
    $('.error').addClass('hidden');
  }
  });
  // End of condition 1 (Control)

  //Transition Slide
  $('#transition-next').click(function(event) {
    $('#transition').addClass('hidden');
    $('#motorcycle').removeClass('hidden');
  });

  //Scenario 1: Motorcycle
  $('#motorcycle-next').click(function(event) {
    var completed = true;

    if (
      !$("input:radio[name='m-likelihood']:checked").val() ||
      !$("input:radio[name='m-serious']:checked").val() ||
      !$("input:radio[name='m-cope']:checked").val() ||
      !$("input:radio[name='m-likely']:checked").val()
    ) {
      $('.error').removeClass('hidden');
      completed = false;
      window.scrollTo(0,0);
    }

    if (completed) {
    window.scrollTo(0,0);
    $('#motorcycle').addClass('hidden');
    $('#wildernesscamping').removeClass('hidden');
    $('.error').addClass('hidden');
  }
  });

  //Scenario 2: Wilderness Camping
  $('#wildernesscamping-next').click(function(event) {
    var completed = true;

    if (
      !$("input:radio[name='wc-likelihood']:checked").val() ||
      !$("input:radio[name='wc-serious']:checked").val() ||
      !$("input:radio[name='wc-cope']:checked").val() ||
      !$("input:radio[name='wc-likely']:checked").val()
    ) {
      $('.error').removeClass('hidden');
      completed = false;
      window.scrollTo(0,0);
    }

    if (completed) {
    window.scrollTo(0,0);
    $('#wildernesscamping').addClass('hidden');
    $('#skiing').removeClass('hidden');
    $('.error').addClass('hidden');
  }
  });

  //Scenario 3: Skiing
  $('#skiing-next').click(function(event) {
    var completed = true;

    if (
      !$("input:radio[name='s-likelihood']:checked").val() ||
      !$("input:radio[name='s-serious']:checked").val() ||
      !$("input:radio[name='s-cope']:checked").val() ||
      !$("input:radio[name='s-likely']:checked").val()
    ) {
      $('.error').removeClass('hidden');
      completed = false;
      window.scrollTo(0,0);
    }

    if (completed) {
    window.scrollTo(0,0);
    $('#skiing').addClass('hidden');
    $('#believe-god').removeClass('hidden');
    $('.error').addClass('hidden');
  }
  });

  //Do you believe in God?
  $('#believe-god-next').click(function(event) {
    var completed = true;

    if (
      !$("input:radio[name='god-believe']:checked").val()
    ) {
      $('.error').removeClass('hidden');
      completed = false;
      window.scrollTo(0,0);
    }

    if (completed) {
    $('#believe-god').addClass('hidden');
    $('#final-questions').removeClass('hidden');
    $('.error').addClass('hidden');
  }
  });

  //Demographics
  $('#submit').click(function(event) {
    var completed = true;
    var answered = true;

    if (!$("input:radio[name='gender']:checked").val() ||
        !$("input:radio[name='english']:checked").val() ||
        !$("input:radio[name='check']:checked").val() ||
        !$('#age-box').val()) {
      answered = false;
    }

    if (!answered) {
      completed = confirm('There are unanswered questions on this page. Are you sure you want to continue?');
    }

    if (completed) {
      experiment.log_response();
      experiment.submit_others();
      experiment.end();
      $('#final-questions').addClass('hidden');
      $('#thankyou').removeClass('hidden');
    }
  });

})

//Submission of Data
var experiment = {

    // The object to be submitted.
    data: {
      condition_god: [],
      god_thoughts: [],
      god_attncheck: [],
      condition_control: [],
      control_thoughts: [],
      control_attncheck: [],
      mlikelihood: [],
      mserious: [],
      mcope: [],
      mlikely: [],
      wclikelihood: [],
      wcserious: [],
      wccope: [],
      wclikely: [],
      slikelihood: [],
      sserious: [],
      s_cope: [],
      slikely: [],
      godbelief: [],
      gen: [],
      age: [],
      engl: [],
      previouscheck: [],
    },

    end: function() {
    // Wait 1.5 seconds and then submit the whole experiment object to Mechanical Turk
    //(mmturkey filters out the functions so we know we're just submitting properties [i.e. data])
    setTimeout(function() { turk.submit(experiment.data) }, 1500);
    },

    // LOG RESPONSE
    log_response: function() {
      var response_logged = false;

      //Array of radio buttons
      var radio1 = document.getElementsByName("god");
      var radio2 = document.getElementsByName("control");
      var radio3 = document.getElementsByName("m-likelihood");
      var radio4 = document.getElementsByName("m-serious");
      var radio5 = document.getElementsByName("m-cope");
      var radio6 = document.getElementsByName("m-likely");
      var radio7 = document.getElementsByName("wc-likelihood");
      var radio8 = document.getElementsByName("wc-serious");
      var radio9 = document.getElementsByName("wc-cope");
      var radio10 = document.getElementsByName("wc-likely");
      var radio11 = document.getElementsByName("s-likelihood");
      var radio12 = document.getElementsByName("s-serious");
      var radio13 = document.getElementsByName("s-cope");
      var radio14 = document.getElementsByName("s-likely");
      var radio15 = document.getElementsByName("god-believe");
      var radio16 = document.getElementsByName("gender");
      var radio17 = document.getElementsByName("english");
      var radio18 = document.getElementsByName("check");

      // Loop through radio buttons
      for (i = 0; i < radio1.length; i++) {
        if (radio1[i].checked) {
          experiment.data.condition_god.push(radio1[i].value);
          response_logged = true;
          }
        }
      for (i = 0; i < radio2.length; i++) {
        if (radio2[i].checked) {
          experiment.data.condition_control.push(radio2[i].value);
          response_logged = true;
          }
        }
      for (i = 0; i < radio3.length; i++) {
        if (radio3[i].checked) {
          experiment.data.mlikelihood.push(radio3[i].value);
          response_logged = true;
          }
        }
      for (i = 0; i < radio4.length; i++) {
        if (radio4[i].checked) {
          experiment.data.mserious.push(radio4[i].value);
          response_logged = true;
          }
        }
      for (i = 0; i < radio5.length; i++) {
        if (radio5[i].checked) {
          experiment.data.mcope.push(radio5[i].value);
          response_logged = true;
          }
        }
      for (i = 0; i < radio6.length; i++) {
        if (radio6[i].checked) {
          experiment.data.mlikely.push(radio6[i].value);
          response_logged = true;
          }
        }
      for (i = 0; i < radio7.length; i++) {
        if (radio7[i].checked) {
          experiment.data.wclikelihood.push(radio7[i].value);
          response_logged = true;
          }
        }
      for (i = 0; i < radio8.length; i++) {
        if (radio8[i].checked) {
          experiment.data.wcserious.push(radio8[i].value);
          response_logged = true;
          }
        }
      for (i = 0; i < radio9.length; i++) {
        if (radio9[i].checked) {
          experiment.data.wccope.push(radio9[i].value);
          response_logged = true;
          }
        }
      for (i = 0; i < radio10.length; i++) {
        if (radio10[i].checked) {
          experiment.data.wclikely.push(radio10[i].value);
          response_logged = true;
          }
        }
      for (i = 0; i < radio11.length; i++) {
        if (radio11[i].checked) {
          experiment.data.slikelihood.push(radio11[i].value);
          response_logged = true;
          }
        }
      for (i = 0; i < radio12.length; i++) {
        if (radio12[i].checked) {
          experiment.data.sserious.push(radio12[i].value);
          response_logged = true;
          }
        }
      for (i = 0; i < radio13.length; i++) {
        if (radio13[i].checked) {
          experiment.data.s_cope.push(radio13[i].value);
          response_logged = true;
          }
        }
      for (i = 0; i < radio14.length; i++) {
        if (radio14[i].checked) {
          experiment.data.slikely.push(radio14[i].value);
          response_logged = true;
          }
        }
      for (i = 0; i < radio15.length; i++) {
        if (radio15[i].checked) {
          experiment.data.godbelief.push(radio15[i].value);
          response_logged = true;
          }
        }
      for (i = 0; i < radio16.length; i++) {
        if (radio16[i].checked) {
          experiment.data.gen.push(radio16[i].value);
          response_logged = true;
          }
        }
      for (i = 0; i < radio17.length; i++) {
        if (radio17[i].checked) {
          experiment.data.engl.push(radio17[i].value);
          response_logged = true;
          }
        }
      for (i = 0; i < radio18.length; i++) {
        if (radio18[i].checked) {
          experiment.data.previouscheck.push(radio18[i].value);
          response_logged = true;
          }
        }
      },
    submit_others: function() {
      experiment.data.god_thoughts.push(document.getElementById("god-thoughts").value);
      experiment.data.god_attncheck.push(document.getElementById("god-attncheck").value);
      experiment.data.control_thoughts.push(document.getElementById("control-thoughts").value);
      experiment.data.control_attncheck.push(document.getElementById("control-attncheck").value);
      experiment.data.age.push(document.getElementById("age-box").value);
  }
}
