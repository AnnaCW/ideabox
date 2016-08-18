$(document).ready(function(){
  $("#save-button").on('click', function(){
    console.log("clicked")
    var title = $("#titleTextarea").val()
    var body = $("#bodyTextarea").val();

    $.ajax({
      url: "/api/v1/ideas.json",
      method: "POST",
      dataType: "JSON",
      data: {idea: { title: title, body: body} },
      success: function(newIdea){
        $(".ideas-listing").prepend(displayIdea(newIdea));
        $("#titleTextarea").val("");
        $("#bodyTextarea").val("");
       },
      error: function(xhr) {
       console.log(xhr.responseText)
     }
    });
     return false;
  })
});
