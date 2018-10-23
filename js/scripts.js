$(document).ready(function(){

  var gaze = function(yin, yang) {
    var balance = yin +  yang;
    return balance;
  }

  $("form#luckSurvey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();

    var unluck = 0;
    var luck = 0;

    $("input:checkbox[name=misfortune]:checked").each(function(){
      var misfortuneEvents = $(this).val();
      unluck--;
    });
    // $("#fun-responses").show();
    $("input:checkbox[name=luckyEvent]:checked").each(function(){
      var luckyEvents = $(this).val();
      luck++;
    });
    $('#luckSurvey').hide();


    var fortune = gaze(luck, unluck);

    if (fortune < -2) {
      $("#fortuneOne").show();
    } else if (fortune < 2) {
      $("#fortuneTwo").show();
    } else {
      $("#fortuneThree").show();
    }

  });
});
