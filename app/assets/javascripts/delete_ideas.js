$(document).ready(function(){
  $('.ideas-listing').delegate('.delete-button', 'click', function() {
    var ideaId = $(this).data("target")
    var idea = $(this).parent().parent()
    console.log(ideaId)
    deleteIdea(ideaId, idea);
  })
});
