function fibonacciFinder(parameter) {
    var x = 1;
    var y = 1;
    var next;

    for (var i = 1; i <= parameter; i++){
        next = x+y;
        x = y;
        y = next;
    }
    return next;
}

document.write(fibonacciFinder(7));