const song = document.getElementById('music');
const icon = document.getElementById('icon');

icon.addEventListener('click', function() {
    if(song.paused){
        song.play();
        icon.className = "fa-solid fa-circle-pause"
    }else{
        song.pause();
        icon.className = "fa-solid fa-circle-play"
    }
});
