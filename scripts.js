$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-respnses").show();
    $("input:checkbox[name=work-transportation]:checked").eachfunction(){
      var workTransportationMode=$(this.val();
      $('work-responses').append(workTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});
