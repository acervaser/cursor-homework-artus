function playSound(code) {
    const audio = document.querySelector(`audio[data-key ="${code}"]`);
    const key = document.querySelector(`.key[data-key ="${code}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    setTimeout(() => {
        audio.pause()
    }, 5000);

};

function removeTransition(e) {
    if (e.propertyName !== "transform") return
    this.classList.remove("playing");
}
const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('click', (e) => 
playSound(e.currentTarget.dataset.key)));

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', (e) => playSound(e.keyCode));