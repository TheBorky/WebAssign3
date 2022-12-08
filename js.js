var key1 = document.getElementById('key1')
var key2 = document.getElementById('key2')
var key3 = document.getElementById('key3')
var key4 = document.getElementById('key4')
var key5 = document.getElementById('key5')
var key6 = document.getElementById('key6')
var key7 = document.getElementById('key7')
var key8 = document.getElementById('key8')
var key9 = document.getElementById('key9')
var key10 = document.getElementById('key10')

var pianoStyle = ["<img src='SVG/Piano.svg'>", "<img src='SVG/Synth.svg'>", "<img src='SVG/Harpischord.svg'>"]
var piano = false;
var pianoDisplay = 1

$("#power").on("click", function () {
    console.log('power')
    piano = !piano;
    $(".piano").fadeToggle()
})

$("#next").on("click", function () {
    console.log(pianoDisplay)
   
    pianoDisplay++;
    if (pianoDisplay == pianoStyle.length) {
        pianoDisplay = 0;
    }
    $(".piano").html(pianoStyle[pianoDisplay])
})

$("#prev").on("click", function () {
    console.log(pianoDisplay)
   pianoDisplay--;
    if (pianoDisplay == -1) {
        pianoDisplay = pianoStyle.length;
    }
    $(".piano").html(pianoStyle[pianoDisplay])
})




document.addEventListener('keydown', function(e) {
    if (e.key == "a") {
        console.log("playNote")
     key1.play()
    }

    if (e.key == 's') {
        console.log("playNote")
     key2.play()
    }
  
    if (e.key == 'd') {
        console.log("playNote")
     key3.play()
    }

    if (e.key == 'f'){
        console.log("playNote")
     key4.play()
    }

    if (e.key == 'g') {
        console.log("playNote")
     key5.play()
    }

    if (e.key == 'h') {
        console.log("playNote")
     key6.play()
    }

    if (e.key == 'j') {
        console.log("playNote")
     key7.play()
    }

    if (e.key == 'k') {
        console.log("playNote")
     key8.play()
    }

    if (e.key == 'l') {
        console.log("playNote")
     key9.play()
    }

    if (e.key == ';') {
        console.log("playNote")
     key10.play()
    }
});


