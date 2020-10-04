selectTab = (id) => {
  clearActive()
  $('#' + id).addClass('active')
  hideInactive(id)
}

clearActive = () => {
  $('#intro_tab').removeClass('active')
  $('#play_tab').removeClass('active')
}

hideInactive = (id) => {
  if (id == 'intro_tab'){
    $('#play_with_notification').hide()
    $('#introduction').show()
  } else if(id == 'play_tab') {
    $('#introduction').hide()
    $('#play_with_notification').show()
  }
}

broadcastNotification = () => {
  triggerNotification({})
  showAlert()
}

showAlert = () => {
  $('#trigger_success').removeAttr('hidden')
  setTimeout(() => { $('#trigger_success').attr('hidden', true) }, 3000);
}