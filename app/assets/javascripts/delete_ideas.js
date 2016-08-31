$(document).ready(function(){
  $('.ideas-listing').delegate('.delete-button', 'click', function() {
    var ideaId = $(this).data("target");
    var idea = $(this).parents(".form-group");
    deleteIdea(ideaId, idea);
  });
});
