(async () => {
    const showNotification = () => {
        const notification = new Notification('Javascript Notification Test', {
            body: 'This is a Javascript notification',
            icon: './img/js.png',
            vibrate: true
        });
    
        setTimeout(() => {
            notification.close();
        }, 10 * 1000);
    
        notification.addEventListener('click', () => {
            window.open("https://translate.google.com/")
        });
    }
    
    const showError = () => {
        const error = document.querySelector('.error');
        error.style.display = 'block';
        error.textContent = 'You blocked the notifications';
    }
    
    let granted = false;
    
    if (Notification.permission === 'granted') {
        granted = true;
    } else if (Notification.permission !== 'denied') {
        let permission = await Notification.requestPermission();
        granted = permission === 'granted' ? true : false;
    }
    
    granted ? showNotification() : showError();
    
})();