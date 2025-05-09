document.addEventListener('DOMContentLoaded', function() {
    const button1 = document.getElementById('button1');
    const button2 = document.getElementById('button2');
    const button3 = document.getElementById('button3');

    if (button1) {
        button1.addEventListener('click', function() {
            alert('Action 1 clicked!');
            // You can add more complex JavaScript logic here
        });
    }

    if (button2) {
        button2.addEventListener('click', function() {
            alert('Action 2 clicked!');
            // You can add more complex JavaScript logic here
        });
    }

    if (button3) {
        button3.addEventListener('click', function() {
            alert('Action 3 clicked!');
            // You can add more complex JavaScript logic here
        });
    }
});
