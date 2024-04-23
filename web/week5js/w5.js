var sound = new Howl({
    src: ['80s_vibe.mp3']
});


function playSound() {
    sound.play();
}


function togglePlayPause() {
    if (sound.playing()) {
        sound.pause();
    } else {
        sound.play();
    }
}


document.addEventListener('DOMContentLoaded', function() {
    var playButton = document.getElementById('button1');
    var toggleButton = document.getElementById('button2');

    playButton.addEventListener('click', playSound);
    toggleButton.addEventListener('click', togglePlayPause);
});

