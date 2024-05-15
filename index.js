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

setInterval(() => {
    document.getElementById('home-title').innerHTML = titles[i % titles.length];
    i++
}, 1000);
