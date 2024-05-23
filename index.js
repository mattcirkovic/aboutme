var titles = [
    'web designer',
    'disc golfer',
    'data scientist',
    'guitar player',
    'bad golfer',
    'trail runner',
    'data engineer',
    'fast learner',
    'software developer'
];

var i = 0;
var dark = true;

document.getElementById("dark-mode-button").addEventListener('click', () => {
    dark = !dark;
    document.getElementById('page').setAttribute('data-bs-theme', dark ? 'dark' : 'light');
    console.log('Changed theme');
})

setInterval(() => {
    document.getElementById('home-title').innerHTML = titles[i % titles.length];
    i++
}, 1000);
