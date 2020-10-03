setupApplication = () => {
  isValid = validate()
  if(!isValid) return
  
  register()
  requestPermission()
  subscribe()
}

validate = () => {
  return ('serviceWorker' in navigator) && ('PushManager' in window)
}

register = () => {
  return navigator.serviceWorker.register('/scripts/service_worker.js')
  .then(registration => {
    console.log("Service Worker Registered!!")
    return registration
  })
  .catch(err => {
    console.log("Failed to register Service Worker", err)
  })
}

requestPermission = () => {
  return new Promise((resolve, reject) => {
      const permissionResult = Notification.requestPermission(result => resolve(result))

      if (permissionResult) {
        permissionResult.then(resolve, reject)
      }
    })
    .then(permissionResult => {
        if (permissionResult !== 'granted') {
          throw new Error("We weren't granted permission.")
        }
      });
}

subscribe = () => {
    return navigator.serviceWorker.register('/scripts/service_worker.js')
      .then((registration) => {
          const subscribeOptions = {
            userVisibleOnly: true,
            applicationServerKey: applicationKey()
          }

          return registration.pushManager.subscribe(subscribeOptions)
        })
      .then((pushSubscription) => {
          console.log('Received PushSubscription: ', JSON.stringify(pushSubscription))
          return pushSubscription
        });
}

applicationKey = () => {
  const padding = '='.repeat((4 - APPLICATION_KEY.length % 4) % 4);
  const base64 = (APPLICATION_KEY + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}