$(document).ready(function () {

  $('#search-box').on('keyup', function() {
    var searchTerm = $(this).val().toLowerCase();
    var ideas = $('.ideas-listing').children();

    ideas.each(function (index, idea) {
      var $idea = $(idea);
      if($idea.find(".title, .body").text().toLowerCase().includes(searchTerm)) {
        $idea.show();
      } else {
        $idea.hide();
      }
    });
  });
});
