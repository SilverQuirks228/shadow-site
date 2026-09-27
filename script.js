document.getElementById('chaosBtn').addEventListener('click', function() {
    // Эффект вспышки при вызове Chaos Control
    document.body.style.transition = 'filter 0.3s ease';
    document.body.style.filter = 'invert(1) hue-rotate(180deg)';
    
    alert('CHAOS CONTROL! Время замедлено!');

    setTimeout(function() {
        document.body.style.filter = 'none';
    }, 1000);
});