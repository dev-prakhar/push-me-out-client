addSubscribers = (data) => {
  $.post('http://localhost:8001/notifier/subscribers/', data).done(response => console.log(response))
}