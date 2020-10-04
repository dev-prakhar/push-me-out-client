# Push me Out Client
JS Client for Push me out

# Steps to setup the client

### Start http-server
* run `npm install http-server -g`
* run `http-server --p 8000`

### Generate VAPID Keys
* run `npm install -g web-push`
* run `web-push generate-vapid-keys`
* create a new file `secrets.js` in `scripts/`
* Add the following contents to the file
```
APPLICATION_KEY = {generated_public_key}
```
* Save the **Private Key** for application server

Open `localhost:8000` on your browser and start sending notification to yourself.

# Demo

### Requesting Permission
* When the page is loaded, the application asks for permission for sending push events
* ![Requesting Permission](..images/request_permission.png)