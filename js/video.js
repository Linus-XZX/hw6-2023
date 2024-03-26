const video = document.querySelector('#player1');

window.addEventListener("load", () => {
	video.autoplay = false;
	video.loop = false;
	document.querySelector('#volume').textContent = '100%';
})

document.querySelector('#play').addEventListener('click', () => {
	video.play();
})

document.querySelector('#pause').addEventListener('click', () => {
	video.pause();
})

document.querySelector('#slower').addEventListener('click', () => {
	video.playbackRate *= 0.9;
	console.log(video.playbackRate);
})

document.querySelector('#faster').addEventListener('click', () => {
	video.playbackRate /= 0.9;
	console.log(video.playbackRate);
})

document.querySelector('#skip').addEventListener('click', () => {
	console.log(currentTime);
	if (video.duration - video.currentTime <= 10){
		video.currentTime = 0;
	}else{
		video.currentTime += 10;
	}
})

document.querySelector('#mute').addEventListener('click', () => {
	if (video.muted) {
		document.querySelector('#mute').textContent = 'Mute';
		video.muted = false;
	}else{
		document.querySelector('#mute').textContent = 'Unmute';
		video.muted = true;
	}
})

document.querySelector('#slider').addEventListener('change', (e) => {
	video.volume = e.target.value / 100;
	document.querySelector('#volume').textContent = `${e.target.value}%`;
})

document.querySelector('#vintage').addEventListener('click', () => {
	video.classList.add('oldSchool');
})

document.querySelector('#orig').addEventListener('click', () => {
	video.classList.remove('oldSchool');
})