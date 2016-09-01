$(document).ready(function(){
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

  $('.ideas-listing').on('click', '.thumbs-up-button', function() {
    var ideaId = $(this).data("target");
    var idea = $(this).parents(".form-group");
    var ideaQuality = $(this).parents(".form-group").find(".quality").text();
    var data = { quality: increaseQuality[ideaQuality] };
    console.log(data);

    $.ajax({
      url: "/api/v1/ideas/" + ideaId + ".json",
      method: "PATCH",
      dataType: "JSON",
      data: data,
      success: function(updatedIdea){
        console.log("increased quality");
        $(idea).find(".quality").text(increaseQuality[ideaQuality]);
      },
      error: function(xhr) {
       console.log(xhr.responseText);
     }
    });
  });

  $('.ideas-listing').on('click', '.thumbs-down-button', function() {
    var ideaId = $(this).data("target");
    var idea = $(this).parents(".form-group");
    var ideaQuality = $(this).parents(".form-group").find(".quality").text();
    var data = { quality: decreaseQuality[ideaQuality] };
    console.log(data);

    $.ajax({
      url: "/api/v1/ideas/" + ideaId + ".json",
      method: "PATCH",
      dataType: "JSON",
      data: data,
      success: function(updatedIdea){
        console.log("decreased quality");
        $(idea).find(".quality").text(decreaseQuality[ideaQuality]);
      },
      error: function(xhr) {
       console.log(xhr.responseText);
     }
    });
  });
});
