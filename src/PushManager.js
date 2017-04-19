const FCM_URL = 'https://android.googleapis.com/gcm/send/';
const APPLICATION_SERVER_PUBLIC_KEY =
  'BJY6L-na0YjgEdYDQIckWcqrCpWSZuF5DDUrJYtWSGoT4juFLg2hSnuOtjews4e3wiuJBozAQJ' +
  'pHAlEcSojoJ3E';

let isSubscribed = false;
let serviceWorkerRegistration = null;
let onWebPushRegisterCallback = undefined;
let self;
let _leanplum;

class PushManager {
  constructor(leanplum) {
    _leanplum = leanplum;
    self = this;
    if (navigator && navigator.serviceWorker &&
      'serviceWorker' in navigator && 'PushManager' in window) {
      console.log('Service Worker and Push is supported.');

      navigator.serviceWorker.register('/sw.min.js')
        .then(function(registration) {
          console.log('Leanplum: Service Worker is registered.');
          serviceWorkerRegistration = registration;

          // Set the initial subscription value
          serviceWorkerRegistration.pushManager.getSubscription()
            .then(function(subscription) {
              isSubscribed = !(subscription === null);

              self._updateSubscriptionOnServer(subscription);

              if (isSubscribed) {
                console.log('User IS subscribed.');
              } else {
                console.log('User is NOT subscribed.');
              }

              if (onWebPushRegisterCallback) {
                onWebPushRegisterCallback(isSubscribed);
              }
            });
        })
        .catch(function(error) {
          console.log('Service Worker Error', error);
        });
    } else {
      console.log('Leanplum: Push messaging is not supported');
    }
  }

  isWebPushSupported() {
    return (serviceWorkerRegistration !== undefined) ? true : false;
  }

  addOnWebPushRegister(cb) {
    onWebPushRegisterCallback = cb;
    return true;
  }

  _urlB64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  subscribeUser() {
    const applicationServerKey =
      this._urlB64ToUint8Array(APPLICATION_SERVER_PUBLIC_KEY);
    console.log(applicationServerKey);
    serviceWorkerRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: applicationServerKey,
      })
      .then(function(subscription) {
        console.log('User is subscribed.');

        self._updateSubscriptionOnServer(subscription);

        isSubscribed = true;

        if (onWebPushRegisterCallback) {
          onWebPushRegisterCallback(isSubscribed);
        }
      })
      .catch(function(err) {
        console.log('Failed to subscribe the user: ', err);
      });
  }

  unsubscribeUser() {
    serviceWorkerRegistration.pushManager.getSubscription()
      .then(function(subscription) {
        if (subscription) {
          return subscription.unsubscribe();
        }
      })
      .catch(function(error) {
        console.log('Error unsubscribing', error);
      })
      .then(function() {
        self._updateSubscriptionOnServer(null);

        console.log('User is unsubscribed.');
        isSubscribed = false;

        if (onWebPushRegisterCallback) {
          onWebPushRegisterCallback(isSubscribed);
        }
      });
  }

  _updateSubscriptionOnServer(subscription) {
    console.dir(JSON.stringify(subscription, null, 2));
    if (subscription) {
      _leanplum.setSubscription(subscription);
    }
  }

  _extractRegistrationId(subscription) {
    if (subscription && subscription.endpoint &&
      subscription.endpoint.length) {
      return subscription.endpoint.replace(FCM_URL, '');
    }
    return null;
  }
}

module.exports = PushManager;
