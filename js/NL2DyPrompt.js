document.getElementById("NL2DyPrompt-button").addEventListener("click", function(){
    const input = document.getElementById("NL2DyPrompt-input").value;
    const output = '{' + input.split('\n').join(' | ') + '}';
    document.getElementById("NL2DyPrompt-output").value = output;
});
