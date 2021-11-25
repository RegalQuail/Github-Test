const greeting = new Notification('Hi, how are you?', {
    body: 'Hav a nice day',
});

greeting.addEventListener('click', function() {
    window.open("https://translate.google.com/")
})