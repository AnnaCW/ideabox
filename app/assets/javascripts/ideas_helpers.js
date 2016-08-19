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

  function trimBody(body) {
      var short = body.substr(0, 100);
        if (/^\S/.test(body.substr(100)))
            return short.replace(/\s+\S*$/, "");
        return short;
  }

function displayIdea(idea) {
  return $('<tr class=form-group id=' + idea.id + '>' +
  '<td class=title>' + idea.title + '</td>' +
  '<td class=hidden-title style=display:none><textarea class=form-control>' + idea.title + '</textarea></td>' +
  '<td class=body>' + trimBody(idea.body) + '</td>' +
  '<td class=full-body style=display:none;><textarea class=form-control>' + idea.body + '</textarea></td>' +
  '<td class=quality>' + idea.quality + '</td>' +
  '<td>' +
    '<button class="btn btn-xs btn-success thumbs-up-button" data-target=' + idea.id + '>Thumbs Up</button>' +
    '<button class="btn btn-xs btn-warning thumbs-down-button" data-target=' + idea.id + '>Thumbs Down</button>' +
  '</td>' +
  '<td><button class="btn btn-danger delete-button" data-target=' + idea.id + '>Delete</button>' +
  '</tr>');
};
