$(document).ready(function(){

  //Make socket connection
  var socketFE = io.connect();

  //Variables
  var studentName;
  var firstName;

  //Class List
  var userid = [
    '2021001',
    '2021002',
    '2021003',
    '2021004',
    '2021005',
    '2021006',
    '2021007',
    '2021008',
    '2021009',
    '2021010',
    '2021011',
    '2021012',
    '2021013',
    '2021014',
    '2021015',
    '2021016',
    '2021017',
    '2021018',
    '2021019',
    '2021020'
  ]


  //Query DOM
  var buzzer = $('#buzzer');
  var idinput = $('#playerid');
  var submit = $('#join');
  var name = $('#pname');
  var signin = $('#signin');
  var pname = $('#pname');
  var luck = $('#luck');
  var question = $('#question-section');
  var score = $('#score-section');
  var playername = $('#playername');



  //Emit events

  buzzer.click(function(){
    socketFE.emit('buzz', pname.text());
  });

  //Listen for events
  submit.click(function(){

    if($.inArray(idinput.val(), userid) !== -1)
    {
      studentName = playername.val();
    }
    else {
      alert('User ID is not in the database')
    }


      var splitName = studentName.split(' ');
      firstName = splitName[0];
      pname.html(firstName);

      socketFE.emit('join', studentName);

//ANIMATE ALL ELEMENTS IN AND OUT AS NECESSARY :)
      signin.fadeOut();

      setTimeout(function(){
        luck.show(800).delay(2000).slideUp(800);
      }, 100);

// Animation zooms out McJeopardy title
      setTimeout(function(){
        $('#title').animate({
                fontSize: "5vw"
            }, 1000);
          }, 3600);
      setTimeout(function(){
        $('sup').animate({
                fontSize: "3vw"
            }, 1000);
        $('#title').addClass('mt-5');
          }, 3600);


      setTimeout(function(){
        question.show();
        score.show();
          }, 3600);


  });

});
