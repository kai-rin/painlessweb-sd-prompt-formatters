document.getElementById("tool4-button").addEventListener("click", function() {
    const inputText = document.getElementById("tool4-input").value;

    // Temporarily replace the <> sections to not be affected by the following replaces
    const placeholders = [];
    const tempInput = inputText.replace(/\(.*?\)/g, match => {
        placeholders.push(match);
        return `<${placeholders.length - 1}>`;
    });

    let outputText = tempInput
        .replace(/:\d+(\.\d+)?/g, '')
        .replace(/[\(\)]/g, '')
        .trim();
      
    // Replace back the placeholders to their original form
    placeholders.forEach((placeholder, i) => {
        outputText = outputText.replace(new RegExp(`<${i}>`, 'g'), placeholder.replace(/[\(\):.\d]/g, ''));
    });

    document.getElementById("tool4-output").value = outputText;
});
