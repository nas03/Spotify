// SEEKBAR
const playBtn = document.querySelector('.js-play-btn');
var nowPlaying = false;
function removePlayIcon() {
    playBtn.classList.remove('bi-play-circle');
    playBtn.classList.add('bi-pause-circle');
}
function playMusic() {
    document.getElementById('player').play();
    removePlayIcon();
}
function removePauseIcon() {
    playBtn.classList.remove('bi-pause-circle');
    playBtn.classList.add('bi-play-circle');
}
function pauseMusic() {
    document.getElementById('player').pause();
    removePauseIcon();
}
playBtn.addEventListener('click', function () {
    if (!nowPlaying) {
        playMusic();
        nowPlaying = true;
    } else {
        pauseMusic();
        nowPlaying = false;
    }
});

$('#player').on('timeupdate', function () {
    $('#seekbar').attr("value", this.currentTime / this.duration);
});

// 