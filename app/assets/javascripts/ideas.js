$(document).ready(function(){
  $.getJSON('/ideas').then(function(ideas) {
      var renderedIdeas = ideas.map(displayIdea);
      $(".ideas-listing").append(renderedIdeas);
  });

function displayIdea(idea) {
  return $('<tr><td>' + idea.title + '</td>' +
  '<td>' + jQuery.trim(idea.body).split(" ").slice(0, 100).join(" ") + '</td>' +
  '<td>' + idea.quality + '</td></tr>');
};

  $("#save-button").on('click', function(){
    var title = $("#titleTextarea").val()
    var body = $("#bodyTextarea").val();

    $.ajax({
      url: "/api/v1/ideas.json",
      method: "POST",
      dataType: "JSON",
      data: {idea: { title: title, body: body} },
      success: function(idea){
        $(".ideas-listing").prepend('<tr><td>' + idea.title + '</td>' +
        '<td>' + jQuery.trim(idea.body).split(" ").slice(0, 100).join(" ") + '</td>' +
        '<td>' + idea.quality + '</td></tr>');
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
