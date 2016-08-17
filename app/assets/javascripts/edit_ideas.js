$(document).ready(function(){
   $.when(editIdeaTitle())
   $.when(editIdeaBody())
})

function editIdeaTitle() {
  $('.ideas-listing').on('click', '.title', function(e) {
    $('.ideas-listing').off('click', '.title');
      var ideaTitle = $(this).parent().find(".title").text();
      $(this).parent().find(".title").html("<textarea class='form-control'>" + ideaTitle + "</textarea>");

      var ideaTitleArea = $(this).parent().find(".title").find("textarea");
      ideaTitleArea.addClass("edited");

      $(".ideas-listing").on('click', function(event) {
        if(!$(event.target).is(".edited") ) {

          var ideaId = $(".edited").parent().parent().attr("id");
          var updatedTitle = $(this).parent().find(".title").find("textarea").val();

          var data = { title: updatedTitle };

            $.ajax({
                url: "/api/v1/ideas/" + ideaId + ".json",
                method: "PATCH",
                dataType: "JSON",
                data: data,
                success: function(updatedIdea){
                  console.log("updated!");
                  // $(".edited").parent().html("<td class='title'>" + updatedTitle + "</td>");
                  $(".edited").removeClass("edited");


                  },
                error: function(xhr) {
                    console.log(xhr.responseText)
                  }
             });
        }
    })
  })
 }


function editIdeaBody() {
  $('.ideas-listing').on('click', '.body', function() {
    $('.ideas-listing').off('click', '.body');
      var ideaBody = $(this).parent().find(".full-body").text();
      $(this).parent().find(".body").html("<textarea class='form-control'>" + ideaBody + "</textarea>");

      var ideaBodyArea = $(this).parent().find(".body").find("textarea");
      ideaBodyArea.addClass("edited");

      $(".ideas-listing").on('click', function(event) {
        if(!$(event.target).is(".edited") ) {

          var ideaId = $(".edited").parent().parent().attr("id");
          var updatedBody = $(this).parent().find(".body").find("textarea").val();

          var data = { body: updatedBody };

            $.ajax({
                url: "/api/v1/ideas/" + ideaId + ".json",
                method: "PATCH",
                dataType: "JSON",
                data: data,
                success: function(updatedIdea){
                  console.log("updated!");
                  // $(".edited").parent().html("<td class='body'>" + updatedBody + "</td>");
                  $(".edited").removeClass("edited");

                  },
                error: function(xhr) {
                    console.log(xhr.responseText)
                  }
             });
        }
    })
   })
  }

  // function updateIdeaTitle(ideaTitle) {
  //   $(document).click(function(event) {
  //     if(!$(event.target).is(".edited") ) {
  //     // console.log("win");
  //     // }
  //     // $('.ideas-listing').on('click', '.body', function() {
  //     // var updatedTitle = $(this).parent().find(".title").text();
  //     // var ideaId = $(this).parent().find("id");
  //     console.log(ideaTitle);
  //     // var updatedBody = $(this).parent().find(".full-body").text();
  //
  //     var data = { title: updatedTitle };
  //
  //     $.ajax({
  //       url: "/api/v1/ideas/" + ideaId + ".json",
  //       method: "PATCH",
  //       dataType: "JSON",
  //       data: data,
  //       success: function(updatedIdea){
  //         console.log("updated!");
  //       },
  //         error: function(xhr) {
  //           console.log(xhr.responseText)
  //       }
  //       });
  //     }
  //   })
  // }
