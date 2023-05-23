document.getElementById("NL2DyPrompt-button").addEventListener("click", function(){
    const input = document.getElementById("NL2DyPrompt-input").value;
    const lines = input.split('\n');
    const nonEmptyLines = lines.filter(line => line.trim() !== '');
    const output = '{' + nonEmptyLines.join(' | ') + '}';
    document.getElementById("NL2DyPrompt-output").value = output;
});

document.getElementById("NL2DyPrompt-input").addEventListener("focus", function(){
    this.select();
});
