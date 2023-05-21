const copyButtons = document.querySelectorAll('.copy-button');

copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const outputId = button.dataset.output;
        const outputTextarea = document.getElementById(outputId);
        outputTextarea.select();
        document.execCommand('copy');
    });
});
