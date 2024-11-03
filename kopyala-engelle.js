document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 'c' || e.key === 'x')) {
        e.preventDefault();
    }
});
