function strop(cleft, ctop, d) {
    var drop = document.createElement('img');
    drop.src = "https://cdn.smassets.net/assets/cms/cc/uploads/taller-header-coronavirus-resources.png"
    drop.className = 'punct';
    drop.style.left = cleft + 'px';
    drop.style.top = ctop + 'px';
    drop.id = d;
    document.getElementById('content').appendChild(drop);
}

function randomFromInterval(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}
var n, interval;

function newDrop() {
    var x = randomFromInterval(20, window.innerWidth),
        y = randomFromInterval(10, 100);
    strop(x, y, n);
    n--;
    if (n > 0) {
        setTimeout(newDrop, 500);
        // 500ms is the interval between drops appearing
    }
}

window.onload = function() {
    n = Number.MAX_SAFE_INTEGER;
    newDrop();
    interval = setInterval(function() {
        var drops = document.getElementsByClassName('punct'),
            newY;
        if (drops.length == 0) {
            clearInterval(interval);
            return;
        }
        for (var i = 0; i < drops.length; i++) {
            newY = drops[i].offsetTop + 20;
            if (newY > drops[i].parentNode.offsetHeight) {
                drops[i].parentNode.removeChild(drops[i]);
            }
            else {
                drops[i].style.top = newY + 'px';
            }
        }
    }, 30);
}
