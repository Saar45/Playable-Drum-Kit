/*Storing all element with "drum" as class, in a variable.*/
let numbOfDrumsButton = document.querySelectorAll(".drum").length;

/*Running all numbOfDrumsButton elements through a loop*/
for (let i = 0; i < numbOfDrumsButton; i++) {

    /*Adding for each button an event listener of type "click"*/
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        /*Getting each button's text thanks to the "this.innerHTML" expression, and storing them in a variable called "buttonLetter".*/
        var buttonLetter = this.innerHTML;


        /*Calling the makeSound function and passing in buttonLetter variable as parameter. That will get all button's text("w", "s" etc) and put them to test in the switch statement, and play a sound accordingly.*/
        makeSound(buttonLetter);

        /*Animate a button when clicked*/
        buttonAnimation(buttonLetter);

    })
}


/*Adding a keyboard event OUTSIDE the loop, for keyboard press detection.*/
document.addEventListener("keydown", function (event) {

    /*Storing the key in a variable*/
    var pressedKey = event.key;

    /*passes pressedKey as string (ie: "w") to makeSound, and plays the appropriate sound.*/
    makeSound(pressedKey);

    /*Animate a button when pressed*/
    buttonAnimation(pressedKey);
})


/*Create a function that checks which letter was pressed/clicked. A function which we will then pass in the "click" and "keyboard" event listener.*/
function makeSound(input) {
    /*Using "input" (changeable) which will detect if the value passed is correct. */

    switch (input) {
        case "w":
            var audio = new Audio("tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("kick-bass.mp3");
            audio.play();
            break;
    }


};

/*Adding a function to animate buttons when pressed or clicked*/
function buttonAnimation(input) {

    /*Storing in a variable the key that was passed*/
    let activeButton = document.querySelector("." + input);

    /*Adding our css property ".pressed" thanks to classList.add() in order to animate the pressed button*/
    activeButton.classList.add("pressed");

    /*Calling a function with setTimeout which remove the added "pressed" effect after a few miliseconds*/
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);

}