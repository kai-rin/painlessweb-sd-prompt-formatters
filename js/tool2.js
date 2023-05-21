document.getElementById("tool2-button").addEventListener("click", function(){
    const input = document.getElementById("tool2-input").value;
    const output = input.split(/\s*,\s*/).join('\n');
    document.getElementById("tool2-output").value = output;
});
