importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyD_zaEB4r9OdxRhqjh_3knPThewK0Xr98I",
    authDomain: "baptizo-community.firebaseapp.com",
    projectId: "baptizo-community",
    storageBucket: "baptizo-community.firebasestorage.app",
    messagingSenderId: "781281083216",
    appId: "1:781281083216:web:4236621528ef828ab03655",
    measurementId: "G-7LD94T1B5D"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image || 'https://ik.imagekit.io/h3qzmviwv/baptizo/posts/images/Baptizo-logo.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
