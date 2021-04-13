$(document).ready(function(){

  //Make socket connection
  var socketFE = io.connect();

  //Query DOM
  var buzzlist = $('#player-buzz');
  var playerlist = $('#player-list');
  var questionBlocks = $('.q');
  var questionScreen = $('.q-screen');
  var enableBuzz = $("button[name='enableBuzz']");
  var disableBuzz = $("button[name='disableBuzz']");
  var clearListBtn = $("button[name='clearBuzz']");

  //Emit events

  //Listen for events
  socketFE.on('buzz', function(data){
    buzzlist.append('<li>' + data + ' buzzed in</li>');
  });

  socketFE.on('leave', function(data){
    $('#' + data).remove();
  });

  socketFE.on('join', function(data){
    playerlist.append('<li id="' + data.id + '">' + data.name + '</li>');
  });

  clearListBtn.click(function(){
    buzzlist.empty();
  });

  disableBuzz.click(function(){
      socketFE.emit('disablebuzz', 'disabled');
  });

  enableBuzz.click(function(){
      socketFE.emit('enablebuzz', 'enabled');
  });

  questionBlocks.click(function(){
    showQuestion($(this));
  });

  function showQuestion(question){

    var category;
    var amount = question.text();

    if(question.hasClass('c1')) {
      category = $('#category1').text();
    } else if(question.hasClass('c2')) {
        category = $('#category2').text();
    } else if(question.hasClass('c3')) {
        category = $('#category3').text();
    } else if(question.hasClass('c4')) {
        category = $('#category4').text();
    } else if(question.hasClass('c5')) {
        category = $('#category5').text();
    }

    questionScreen.removeClass('no-display')
  }

  questionScreen.click(function(){
    questionScreen.addClass('no-display');
  });

}); //Closes .ready()
