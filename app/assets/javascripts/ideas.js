$(document).ready(function(){
  $.getJSON('/ideas').then(function(ideas) {
      var renderedIdeas = ideas.map(displayIdea);
      $(".ideas-listing").append(renderedIdeas);
  });

function displayIdea(idea) {
  return $('<tr id=' + idea.id + '>' +
  '<td>' + idea.title + '</td>' +
  '<td>' + jQuery.trim(idea.body).split(" ").slice(0, 100).join(" ") + '</td>' +
  '<td class=quality>' + idea.quality + '</td>' +
  '<td>' +
    '<button class="btn btn-xs btn-success thumbs-up-button" data-target=' + idea.id + '>Thumbs Up</button>' +
    '<button class="btn btn-xs btn-warning thumbs-down-button" data-target=' + idea.id + '>Thumbs Down</button>' +
  '</td>' +
  '<td><button class="btn btn-danger delete-button" data-target=' + idea.id + '>Delete</button>' +
  '</tr>');
};

  $("#save-button").on('click', function(){
    console.log("clicked")
    var title = $("#titleTextarea").val()
    var body = $("#bodyTextarea").val();

    $.ajax({
      url: "/api/v1/ideas.json",
      method: "POST",
      dataType: "JSON",
      data: {idea: { title: title, body: body} },
      success: function(idea){
        $(".ideas-listing").prepend('<tr id=' + idea.id + '>' +
        '<td>' + idea.title + '</td>' +
        '<td>' + jQuery.trim(idea.body).split(" ").slice(0, 100).join(" ") + '</td>' +
        '<td class="quality">' + idea.quality + '</td>' +
        '<td>' +
          '<button class="btn btn-xs btn-success thumbs-up-button" data-target=' + idea.id + '>Thumbs Up</button>' +
          '<button class="btn btn-xs btn-warning thumbs-down-button" data-target=' + idea.id + '>Thumbs Down</button>' +
        '</td>' +
        '<td><button class="btn btn-danger delete-button" data-target=' + idea.id + '>Delete</button>' +
        '</tr>');
        $("#titleTextarea").val("");
        $("#bodyTextarea").val("");
      },
      error: function(xhr) {
       console.log(xhr.responseText)
     }
    });
     return false;
  })

  $('.ideas-listing').delegate('.delete-button', 'click', function() {
    var ideaId = $(this).data("target")
    var idea = $(this).parent().parent()
    console.log(ideaId)

    $.ajax({
      url: "/api/v1/ideas/" + ideaId + ".json",
      method: "DELETE",
      dataType: "JSON",
      success: function(deleteIdea){
        console.log("successfully deleted");
        $(idea).remove()
      },
      error: function(xhr) {
       console.log(xhr.responseText)
     }
    });
  })

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
