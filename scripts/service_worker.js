self.addEventListener('push', event => {
    var title = event.data.text();
    event.waitUntil(self.registration.showNotification(title));
  });