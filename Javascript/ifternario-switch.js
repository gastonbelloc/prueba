let nombre = 'juan perez';
function puedePasar (nombre){
    switch (nombre){
        case 'Cosme Fulanito':
        console.log(false);
        break;
        default:
        console.log(true);
        break;
        }
}
console.log(puedePasar(nombre))