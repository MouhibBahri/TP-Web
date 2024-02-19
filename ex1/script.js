document.querySelector('#easy').addEventListener('click',()=> play(0));
document.querySelector('#inter').addEventListener('click',()=> play(1));
document.querySelector('#hard').addEventListener('click',()=> play(2));

const nbAttempts=5;
const max=[10,30,100];
const msg=["Easy","Intermediate","Hard"];
function play(level) {
    const random = Math.floor(Math.random() * max[level]+1) ;
    let i=0;

    while (i < nbAttempts) {
        let number = prompt(msg[level]+" number: give me a number between 0 and "+max[level]);
        while(number==="")
            number = prompt(msg[level]+" number: give me a number between 0 and "+max[level]);

        number = Number(number);
        if (number > max[level] || number <0) {
            alert("Invalid, try again");
            continue;
        }
        if (number === random) {
            alert("You WON!!");
            break;
        } else {
            let message;
            switch (level){
                case 0:
                    message = number < random ? "Try a higher number" : "Try a lower number";
                    break;
                case 1:
                    const x=Math.abs(number-random);
                    message="The difference is between 1 and "+x;
                    break;
                case 2:
                    message="Try another number";
                    break;
            }

            alert("Oups!! "+message);
            i++;
        }
    }
    if (i === nbAttempts) {
        alert("You LOST!!");
    }
    const tryAgain = confirm("Do you want to play again ?");
    if (tryAgain) {
        play(level);
    }
}
