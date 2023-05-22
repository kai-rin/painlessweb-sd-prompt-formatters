document.getElementById("newlines2commas-button").addEventListener("click", function(){
    const input = document.getElementById("newlines2commas-input").value;
    const output = input.split('\n').join(',');
    document.getElementById("newlines2commas-output").value = output;
});
