$(function(){
  var req = new Request('digest', {method: 'GET', cache: 'reload'});
  fetch(req).then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
  });

  $('#submit').click(function(){
    var digest = {};
    digest['title'] = $('#title').val();
    digest['provenance'] = $('#provenance').val();
    digest['content'] = $('#content').val();
    var post = new Request('digest', {method: 'POST',body: JSON.stringify( digest ),headers: {"Content-Type": "application/json"}});
    fetch(post).then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
    });
  });
});
