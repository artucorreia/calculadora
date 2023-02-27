function clearDisplayer(displayer) { displayer.innerHTML = ``; };

function solve(calculation) { return eval(calculation) };

let calculation = '';
function main(event) {
    let element = event.target.id;
    let displayer = window.document.getElementById('displayer');

    switch (element) {
        case 'equal':
            calculation = solve(calculation);
            displayer.innerHTML = solve(calculation);
            break;
        case 'ac': 
            displayer.innerHTML = ``;
            calculation = '';
            break;
        case 'x': 
            console.log('delete');
            break;
        case '/': 
        case '*':
        case '+':
        case '-':
            clearDisplayer(displayer);
            calculation += element;
            break;
        case 'table':
            break;
        default:
            calculation += element;
            displayer.innerHTML += `${element}`;
            break;
    }
}