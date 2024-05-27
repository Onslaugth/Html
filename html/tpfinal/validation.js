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
        height: '0', // Altura del reproductor
        width: '0', // Anchura del reproductor
        videoId: '3ssL8vx7Xhg', // ID del video de YouTube
        playerVars: {
            'autoplay': 0, // Reproducción automática desactivada
            'controls': 0, // Controles del reproductor desactivados
            'loop': 1, // Repetir el video indefinidamente
            'rel': 0, // Desactivar videos relacionados al final
            'showinfo': 0 // No mostrar información del video
        },
        events: {
            'onReady': onPlayerReady // Función que se llama cuando el reproductor está listo
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

