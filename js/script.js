const backspace = string => string.slice(0, string.length - 1);

const charactersLimit = string => string.length < 30 ? true : false;

const changeSize = (display ,value, measure) => display.style.fontSize = value + measure;

function checkCharacters(display) {
    let characters = display.innerText.length;
    if (characters > 23) {
        changeSize(display ,'1.1', 'em');
    } else if (characters > 18) {
        changeSize(display, '1.4', 'em');
    } else if (characters > 15) {
        changeSize(display, '1.8', 'em');
    } else if (characters > 11) {
        changeSize(display, '2.2', 'em');
    } else {
        changeSize(display, '2.8', 'em');
    }
};

function newCalculation(displayingResult, display) {
    if (displayingResult) {
        return display.innerHTML = display.innerHTML.slice(2);
    }
}

const solve = calculation => eval(calculation);

// verifica se o ultimo carater é uma operação
// se sim, retorna true;
function checkPreviousCharacter(string) {
    let symbols = ['*', '/', '+', '-'];
    let result = false; 
    for(let symbol of symbols) {
        if (symbol === string.slice(string.length - 1)) {
            result = true;
        }
    }
    return result;
}

let calculation = '';
let displayingResult = false;
function main(event) {
    let element = event.target.id;
    let display = window.document.getElementById('displayer');

    switch (element) {
        case 'equal':
            if (checkPreviousCharacter(calculation)) {
                calculation = backspace(calculation);
            }
            if(solve(calculation)) {
                calculation = solve(calculation);
                display.innerHTML = '= ' + solve(calculation);
                displayingResult = true;
            }
        break;
        
        case 'ac':
            display.innerHTML = '';
            calculation = '';
        break;
        
        case 'backspace': 
        case 'icon-bs':
            calculation = backspace(calculation);
            display.innerHTML = backspace(display.innerHTML);
        break;
        
        case '/': 
        case '*':
        case '+':
        case '-':
            newCalculation(displayingResult, display);
            let previousIsSymbol = checkPreviousCharacter(String(calculation))
            if ( charactersLimit(display.innerHTML) && !previousIsSymbol) {
                calculation += element;
                display.innerHTML += event.target.innerHTML;
                displayingResult = false;
            }
        break;

        case 'table':
        
        break;
        
        case '.': 
            newCalculation(displayingResult, display);
            if ( charactersLimit(display.innerHTML) ) {
                if (display.innerHTML === '') {
                    display.innerHTML += '0.'
                    calculation += '0.';
                } else if (display.innerHTML.includes('.')) {
                    // não deve ter outro '.'
                } else {
                    calculation += element;
                    display.innerHTML += `${element}`;
                }
                displayingResult = false;
            }
        break;

        default:
            if ( charactersLimit(display.innerHTML) ) {
                if (displayingResult) {
                    display.innerHTML = '';
                    calculation = '';
                }
                calculation += element;
                display.innerHTML += `${element}`;
                displayingResult = false;
            }
        break;
    }
    checkCharacters(display);
};