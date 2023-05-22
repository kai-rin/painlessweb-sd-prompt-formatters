document.getElementById("commas2NL-button").addEventListener("click", function(){
    const input = document.getElementById("commas2NL-input").value;
    const output = input.split(/\s*,\s*/).join('\n');
    document.getElementById("commas2NL-output").value = output;
});

document.getElementById("commas2NL-input").addEventListener("focus", function(){
    this.select();
});
