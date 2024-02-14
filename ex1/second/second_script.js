function play() {
    var nb = 5;
    var max = 31;
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
            let x=Math.abs(number-random);
            let y= Math.floor(Math.random() * x);
            let message = number < random ? "Try a higher number" : "Try a lower number";
            alert("the difference is between 1 and "+x + " "+ message);
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