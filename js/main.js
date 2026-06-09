window.onload = function(){

const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");
const music = document.getElementById("music");
const openBtn = document.getElementById("enterInvitation");

if(!openBtn){
    console.error("No se encontró el botón enterInvitation");
    return;
}

const weddingDate =
new Date("November 14, 2026 18:00:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days =
    Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes =
    Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds =
    Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

openBtn.addEventListener("click", function(){

    music.volume = 0.5;

    music.play().catch(function(e){
        console.log(e);
    });

    cover.style.display = "none";
    invitation.style.display = "block";

    window.scrollTo(0, 0);

    setTimeout(function(){
        invitation.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, 100);

    updateCountdown();

});

};
