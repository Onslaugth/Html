document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contactForm");


    form.addEventListener("submit", function(event) {
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var message = document.getElementById("message");

        if (name.value === "" || email.value === "" || message.value === "") {
            alert("Por favor, complete todos los campos obligatorios.");
            event.preventDefault(); // Evita que el formulario se envíe
        }
    });
});




var player; // Variable global para el reproductor de YouTube

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '0', 
        width: '0',
        videoId: '3ssL8vx7Xhg', // ID del video de YouTube
        playerVars: {
            'autoplay': 0, 
            'controls': 0, 
            'loop': 1, 
            'rel': 0, 
            'showinfo': 0 
        },
        events: {
            'onReady': onPlayerReady 
        }
    });
}

function onPlayerReady(event) {
    var playButton = document.getElementById("playButton");

    playButton.addEventListener("click", function() {
        if (player.getPlayerState() !== YT.PlayerState.PLAYING) {
            player.playVideo(); // Reproducir video si no está reproduciéndose
            playButton.textContent = "Pausar música";
        } else {
            player.pauseVideo(); // Pausar video si está reproduciéndose
            playButton.textContent = "Reproducir música";
        }
    });
}

