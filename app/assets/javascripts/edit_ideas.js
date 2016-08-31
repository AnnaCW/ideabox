$(document).ready(function(){
  $.when(editIdeaTitle());
  $.when(editIdeaBody());
});

function editIdeaTitle() {
  $('.ideas-listing').on('click', '.title', function(e) {
    $('.ideas-listing').off('click', '.title');
      var ideaTitle = $(this).parent().find(".title").text();
      var displayedTitle = $(this).parent().find(".title");
      var hiddenTitleTextArea = $(this).parent().find(".hidden-title").find("textarea");
      var hiddenTitle = $(this).parent().find(".hidden-title");

      hiddenTitleTextArea.addClass("edited-title");
      hiddenTitle.toggle("style");
      displayedTitle.hide();

      $(".ideas-listing").on('click', function(event) {
        if(!$(event.target).is(".edited-title") ) {
          var ideaId = $(".edited-title").parent().parent().attr("id");
          var updatedTitle = $(".edited-title").val();
          var data = { title: updatedTitle };

            $.ajax({
                url: "/api/v1/ideas/" + ideaId + ".json",
                method: "PATCH",
                dataType: "JSON",
                data: data,
                success: function(updatedIdea){
                  console.log("updated!");
                  $(".edited-title").removeClass("edited-title");
                  hiddenTitle.toggle("style");
                  displayedTitle.show();
                  displayedTitle.text(updatedTitle);

                },
                error: function(xhr) {
                    console.log(xhr.responseText);
                }
            });
       }
    });
  });
}

function editIdeaBody() {
  $('.ideas-listing').on('click', '.body', function() {
    $('.ideas-listing').off('click', '.body');
      var ideaBody = $(this).parent().find(".full-body").text();
      var displayedBody = $(this).parent().find(".body");
      var hiddenBodyTextArea = $(this).parent().find(".full-body").find("textarea");
      var hiddenBody = $(this).parent().find(".full-body");

      hiddenBodyTextArea.addClass("edited-body");
      hiddenBody.toggle("style");
      displayedBody.hide();

      $(".ideas-listing").on('click', function(event) {
        if(!$(event.target).is(".edited-body") ) {
          var ideaId = $(".edited-body").parent().parent().attr("id");
          var updatedBody = $(".edited-body").val();
          var data = { body: updatedBody };

            $.ajax({
                url: "/api/v1/ideas/" + ideaId + ".json",
                method: "PATCH",
                dataType: "JSON",
                data: data,
                success: function(updatedIdea){
                  console.log("updated!");
                  $(".edited-body").removeClass("edited-body");
                  hiddenBody.toggle("style");
                  displayedBody.show();
                  displayedBody.text(trimBody(updatedBody));
                },
                error: function(xhr) {
                    console.log(xhr.responseText);
                }
             });
      }
    });
  });
}
