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
  selectedNotificationType = $("#notificationTypes").val()
  triggerNotification({notification_type_id: selectedNotificationType})
  showAlert()
}

showAlert = () => {
  $('#trigger_success').removeAttr('hidden')
  setTimeout(() => { $('#trigger_success').attr('hidden', true) }, 3000);
}

populateTypes = (types) => {
  for(let i = 0 ; i < types.length ; i++){
    $('#notificationTypes').append($('<option></option>').val(types[i].id).html(types[i].name))
  }   
}