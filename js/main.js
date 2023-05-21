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

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('newlines2commas-input').value = document.getElementById('newlines2commas-input').value.replace(/\\n/g, '\n');
    document.getElementById('tool3-input').value = document.getElementById('tool3-input').value.replace(/\\n/g, '\n');
});

window.onload = function() {
    document.getElementById('newlines2commas').style.display = 'block';
};
