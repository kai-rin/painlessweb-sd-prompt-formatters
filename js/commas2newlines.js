document.getElementById("commas2newlines-button").addEventListener("click", function(){
    const input = document.getElementById("commas2newlines-input").value;
    const output = input.split(/\s*,\s*/).join('\n');
    document.getElementById("commas2newlines-output").value = output;
});

document.getElementById("commas2newlines-input").addEventListener("focus", function(){
    this.select();
});
