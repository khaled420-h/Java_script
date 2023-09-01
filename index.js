var quote = document.getElementById("qoute");



var qoutes = ["A room without books is like a body without a soul.<br>  ― ― Marcus Tullius Cicero",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.<br>   --Bernard M. Baruch",
    "You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.<br>  -- William W. Purkey",
"You know you're in love when you can't fall asleep because reality is finally better than your dreams<br>  -- Dr. Seuss"]

var i = 0;
Math.random(qoutes.length);
function display() {

    var i = Math.floor(Math.random() * qoutes.length);
    quote.innerHTML = qoutes[i];
}