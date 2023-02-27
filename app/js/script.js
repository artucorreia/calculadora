function backspace(display) { return display.slice(0, display.length - 1); };

function clearDisplayer(display) { display.innerHTML = ``; };

function solve(calculation) { return eval(calculation); };

let calculation = '';
let displayingResult = false;
function main(event) {
    let element = event.target.id;
    let display = window.document.getElementById('displayer');

    switch (element) {
        case 'equal':
            calculation = solve(calculation);
            display.innerHTML = solve(calculation);
            displayingResult = true;
        break;
        
        case 'ac':
            display.innerHTML = ``;
            calculation = '';
        break;
        
        case 'backspace': 
            calculation = backspace(display.innerHTML);
            display.innerHTML = backspace(display.innerHTML);
        break;
        
        case '/': 
        case '*':
        case '+':
        case '-':
            clearDisplayer(display);
            calculation += element;
            displayingResult = false;
        break;

        case 'table':
        
        break;
        
        case '.': 
            if (display.innerHTML === '') {
                display.innerHTML = '0.'
                calculation = '0.';
            } else if (display.innerHTML.includes('.')) {

            } else {
                calculation += element;
                display.innerHTML += `${element}`;
            }
            displayingResult = false;
        break;

        default:
            if (displayingResult) {
                display.innerHTML = '';
                calculation = '';
            }
            calculation += element;
            display.innerHTML += `${element}`;
            displayingResult = false;
        break;
    }
};