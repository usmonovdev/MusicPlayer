var sound = new Audio("");
var btn = true;
var input = document.getElementById("uploadAudio");
var playBtn = document.getElementById("playIcon");

input.addEventListener('change', function(){
    const choosedFile = this.files[0];
    if (choosedFile) {
        const reader = new FileReader();
        reader.addEventListener('load', function(){
        sound.setAttribute('src', reader.result);
        });
        reader.readAsDataURL(choosedFile);
    }
});

function playAudio() {
    if(btn, playBtn.className == "playBtn") {
        btn = false;
        playBtn.className = "playBtn1";
        sound.play();
    } else{
        btn = true;
        playBtn.className = "playBtn";
        sound.pause();
    }
}