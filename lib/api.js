
var getAllPosts =  async  function (id) {


  var items = []
  await  fetch('https://api.bebasinfo.id/api/get/feed/daily?page='+id)
  .then(response => response.json())
  .then(data => items =  data.data);
  return items
}

module.exports.getAllPosts = getAllPosts;
