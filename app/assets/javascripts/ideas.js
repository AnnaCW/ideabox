$(document).ready(function(){
  $.getJSON('/ideas').then(function(ideas) {
    // function displayIdeas(ideas, target) {
      var renderedIdeas = ideas.map(displayIdea);
      $(".ideas-listing").append(renderedIdeas);
    // }
  });

function displayIdea(idea) {
  return $('<tr><td>' + idea.title + '</td>' +
  '<td>' + jQuery.trim(idea.body).split(" ").slice(0, 100).join(" ") + '</td>' +
  '<td>' + idea.quality + '</td></tr>');
};

});


  // $.ajax({
  //   url: "/api/v1/ideas.json",
  //   method: "GET",
  //   dataType: "JSON",
  //
  //   success: function(getIdeas){
  //     console.log("Fetched Ideas");
  //     $("#ideas-table").append(
  //
  //     )
  //   }
  //
  //
  // $("#save-button").on('click', function(){
  //   var title = $("#titleTextarea").val()
  //   var body = $("#titleTextarea").val()
  //
  //   $.ajax({
  //     url: "/api/v1/ideas.json",
  //     method: "POST",
  //     dataType: "JSON",
  //     data: {idea: { title: title, body: body},
  //
  //     success: function(createIdea){
  //       console.log("Success");
  //       // $("#titleTextarea").val("");
  //       // $("#body").val("");
  //     }
  //   })
  // })
