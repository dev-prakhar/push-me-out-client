addSubscribers = (data) => {
  return $.post('http://localhost:8001/notifier/subscribers/', data).done(response => response)
}

triggerNotification = (data) => {
  return $.post('http://localhost:8001/notifier/trigger/', data).done(response => response)
}