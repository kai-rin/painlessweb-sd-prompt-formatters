const tabs = document.querySelectorAll('.tab-button');
const tools = document.querySelectorAll('.tool');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        tools.forEach(tool => {
            if (tool.id === tab.dataset.tool) {
                tool.style.display = 'block';
            } else {
                tool.style.display = 'none';
            }
        });
    });
});

window.onload = function() {
    document.getElementById('NL2commas').style.display = 'block';
    document.getElementById('NL2commas-input').value = document.getElementById('NL2commas-input').value.replace(/\\n/g, '\n');
    document.getElementById('NL2DyPrompt-input').value = document.getElementById('NL2DyPrompt-input').value.replace(/\\n/g, '\n');

    document.getElementById("NL2commas-input").addEventListener("focus", function(){
        this.select();
    });
  
    document.getElementById("NL2DyPrompt-input").addEventListener("focus", function(){
        this.select();
    });
};

document.getElementById("NL2commas-clear").addEventListener("click", function(){
    document.getElementById("NL2commas-input").value = '';
});

document.getElementById("commas2newlines-clear").addEventListener("click", function(){
    document.getElementById("commas2newlines-input").value = '';
});

document.getElementById("NL2DyPrompt-clear").addEventListener("click", function(){
    document.getElementById("NL2DyPrompt-input").value = '';
});

document.getElementById("CleanParenthesis-clear").addEventListener("click", function(){
    document.getElementById("CleanParenthesis-input").value = '';
});
