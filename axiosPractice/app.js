var request = axios.get('https://api.vschool.io/pokemon');

request.then(function(response) {
  console.log(response.data)
})
  .catch(function(err) {
    console.log(err);
  })
