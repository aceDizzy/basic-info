// TEXT ANIMATION
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
    .add({
        targets: '.ml6 .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
    }).add({
        targets: '.ml6',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

function greetUser(){
    // VARIABLES
    var yourFirst = document.getElementById("fname").value;
    var yourMid = document.getElementById("mname").value;
    var yourLast = document.getElementById("lname").value;
    var yourAge = document.getElementById("age").value;
    var yourAddress = document.getElementById("address").value;
    var yourCourse = document.getElementById("course").value;
    var yourEmail = document.getElementById("email").value;

    // ALERT
    alert("Hello, " + yourFirst + " " + yourMid + " " + yourLast + ". You are currently " + yourAge + " years old and you live in " + yourAddress + ". You are also currently studying the program, " + yourCourse + ". We will contact you through your email, " + yourEmail +".");
}

