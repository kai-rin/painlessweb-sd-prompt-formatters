document.getElementById("tool4-button").addEventListener("click", function() {
    const input = document.getElementById("tool4-input").value;
    let output = input;

    // Removing all parentheses and anything between colon and parentheses.
    let previous;
    do {
        previous = output;
        output = output.replace(/\(([^:)]*):[^)]*\)/g, '$1');
    } while (previous !== output);

    document.getElementById("tool4-output").value = output;
});
