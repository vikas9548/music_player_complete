const music = document.querySelector('audio');
const img = document.querySelector('img');
const play = document.getElementById('play');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const songs = [{
    name: "Sound1",
    title: "sound1",
    artist: "Vikash",
},
{
    name: "Sound2",
    title: "sound2",
    artist: "Vikash Gupta",
},
{
    name: "Sound3",
    title: "sound3",
    artist: "Vikash Ku. Gupta",
},
]

let isplaying = false;

const playMusic = () => {
    isplaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add('anime');
};

const pauseMusic = () => {
    isplaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove('anime');
};

play.addEventListener('click', () => {
    isplaying ? pauseMusic() : playMusic();
})


// change the music

const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "img/" + songs.name + ".jpg";
};

songIndex = 0;
// loadSong(songs[2]);

const nextSong = () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};
const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);



