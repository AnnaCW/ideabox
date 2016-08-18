$(document).ready(function(){
  $.getJSON('/ideas').then(function(ideas) {
      var renderedIdeas = ideas.map(displayIdea);
      $(".ideas-listing").append(renderedIdeas);
  });
});
