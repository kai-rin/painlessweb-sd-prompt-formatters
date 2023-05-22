document.getElementById("NL2commas-button").addEventListener("click", function(){
    const input = document.getElementById("NL2commas-input").value;
    const output = input.split('\n').join(',');
    document.getElementById("NL2commas-output").value = output;
});

document.getElementById("NL2commas-input").addEventListener("focus", function(){
    this.select();
});
