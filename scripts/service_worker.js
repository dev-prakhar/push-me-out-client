self.addEventListener('push', event => {
    notificationData = event.data.json()
    title = notificationData.text
    delete notificationData.text
    
    event.waitUntil(self.registration.showNotification(title, notificationData));
  });