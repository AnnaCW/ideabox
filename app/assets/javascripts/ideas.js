$(document).ready(function(){
  $.getJSON('/ideas').then(function(ideas) {
      var renderedIdeas = ideas.map(displayIdea);
      $(".ideas-listing").append(renderedIdeas);
  });

function displayIdea(idea) {
  return $('<tr class=form-group id=' + idea.id + '>' +
  '<td class=title>' + idea.title + '</td>' +
  '<td class=body>' + jQuery.trim(idea.body).split(" ").slice(0, 100).join(" ") + '</td>' +
  '<td class=full-body style=display:none;>' + idea.body + '</td>' +
  '<td class=quality>' + idea.quality + '</td>' +
  '<td>' +
    '<button class="btn btn-xs btn-success thumbs-up-button" data-target=' + idea.id + '>Thumbs Up</button>' +
    '<button class="btn btn-xs btn-warning thumbs-down-button" data-target=' + idea.id + '>Thumbs Down</button>' +
  '</td>' +
  '<td><button class="btn btn-danger delete-button" data-target=' + idea.id + '>Delete</button>' +
  '</tr>');
};

// function trimBody(){
  // jQuery.trim(idea.body).split(" ").slice(0, 100).join(" ")
// }

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

  $('.ideas-listing').delegate('.delete-button', 'click', function(e) {
    var ideaId = $(this).data("target")
    var idea = $(this).parent().parent()
    console.log(ideaId)
    deleteIdea(ideaId, idea);
  })

  function deleteIdea(ideaId, idea){
    $.ajax({
      url: "/api/v1/ideas/" + ideaId + ".json",
      method: "DELETE",
      dataType: "JSON",
      success: function(deleteIdea){
        removeIdeaFromDOM(idea);
      }
    });
  }

  function removeIdeaFromDOM(idea){
    console.log("successfully deleted");
    $(idea).remove()
  }

  var increaseQuality = {
    swill: 'plausible',
    plausible: 'genius',
    genius: 'genius'
  };

  var decreaseQuality = {
    swill: 'swill',
    plausible: 'swill',
    genius: 'plausible'
  };

  $('.ideas-listing').delegate('.thumbs-up-button', 'click', function() {
    var ideaId = $(this).data("target")
    var idea = $(this).parent().parent()
    var ideaQuality = $(this).parent().parent().find(".quality").text();
    var data = { quality: increaseQuality[ideaQuality] };
    console.log(data);

    $.ajax({
      url: "/api/v1/ideas/" + ideaId + ".json",
      method: "PATCH",
      dataType: "JSON",
      data: data,
      success: function(updatedIdea){
        console.log("increased quality");
        $(idea).find(".quality").text(increaseQuality[ideaQuality])
      },
      error: function(xhr) {
       console.log(xhr.responseText)
     }
    });
  })

  $('.ideas-listing').delegate('.thumbs-down-button', 'click', function() {
    var ideaId = $(this).data("target")
    var idea = $(this).parent().parent()
    var ideaQuality = $(this).parent().parent().find(".quality").text();
    var data = { quality: decreaseQuality[ideaQuality] };
    console.log(data);

    $.ajax({
      url: "/api/v1/ideas/" + ideaId + ".json",
      method: "PATCH",
      dataType: "JSON",
      data: data,
      success: function(updatedIdea){
        console.log("decreased quality");
        $(idea).find(".quality").text(decreaseQuality[ideaQuality])
      },
      error: function(xhr) {
       console.log(xhr.responseText)
     }
    });
  })
});
