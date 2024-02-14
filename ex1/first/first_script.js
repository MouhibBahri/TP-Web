function play() {
    var nb = 5;
    var max = 11;
    const random = Math.floor(Math.random() * max) ;
    var i = 0;

    while (i < nb) {
        let number = prompt("Essay number "+String(i+1)+" give me a number between 0 and "+ String(max-1));
        number = parseInt(number);
        if (number > max) {
            alert("Invalid, try again");
            continue;
        }
        if (number === random) {
            alert("You WON!!");
            break;
        } else {
            let message = number < random ? "Try a higher number" : "Try a lower number";
            alert("the number is "+message);
            i++;
        }
    }
    if (i === nb) {
        alert("You LOST!!");
    }
    let tryAgain = confirm("Do you want to play again ?");
    if (tryAgain) {
        play();
    }
}