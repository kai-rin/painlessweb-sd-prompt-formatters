document.getElementById("tool3-button").addEventListener("click", function(){
    const input = document.getElementById("tool3-input").value;
    const output = '{' + input.split('\n').join(' | ') + '}';
    document.getElementById("tool3-output").value = output;
});
