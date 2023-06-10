window.onscroll = () => {
    if (document.body.scrollTop || document.documentElement.scrollTop >= 100) {
        document.getElementById('top-btn').style.display = 'block';
    }
    else {
        document.getElementById('top-btn').style.display = 'none';
    }
}
document.getElementById('top-btn').onclick = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}