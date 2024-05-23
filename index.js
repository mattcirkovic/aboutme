var titles = [
    'web designer',
    'disc golfer',
    'data guy',
    'guitar player',
    'Survivor watcher',
    'team player',
    'bread baker',
    'cat owner',
    'double-bogey golfer',
    'chess player',
    'trail runner',
    'fast learner',
    'math geek',
    'software developer',
    'home cook'
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
