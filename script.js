let currentBox = 1;
let currentOption = 0;
let options = [];

function parseCSV(csvText) {
    let rows = csvText.split('\n');
    let data = rows.map(row => row.split(','));
    return data;
}

function randomizeDataOrder(options) {
    for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
    }

    return options
}

function flashBox(boxId) {
    const box = document.getElementById(boxId);

    if (boxId == 'box1') {
        // Apply the lighter color as a CSS variable
        box.style.setProperty('--box-color', '#86d3eb');
        box.style.setProperty('--lighter-color', '#a2e5fa');
    } else {
        // Apply the lighter color as a CSS variable
        box.style.setProperty('--box-color', '#94ebab');
        box.style.setProperty('--lighter-color', '#b6fac8');
    }


    // Add the flash class
    box.classList.add('flash');

    // Remove the class after the animation duration (0.5s)
    setTimeout(() => {
        box.classList.remove('flash');
    }, 500);
}

document.addEventListener('DOMContentLoaded', function() {
    fetch('options.csv')
        .then(response => response.text())
        .then(text => {
            options = randomizeDataOrder(parseCSV(text));
            console.log(options);
            document.getElementById('box1').textContent = options[0][0];
            document.getElementById('box2').textContent = options[0][1];
        });
});

document.getElementById('nextButton').addEventListener('click', function () {
    if (options.length === 0) {
        alert('No options loaded');
        return;
    }

    if (currentOption === (options.length - 1)*2) {
        options = randomizeDataOrder(options);
        currentOption = 0;
    } else {
        currentOption += 1;
    }

    if (currentBox === 1) {
        document.getElementById('box1').textContent = options[Math.floor(currentOption/2)][0];
        flashBox('box1');
        currentBox = 2;
    } else {
        document.getElementById('box2').textContent = options[Math.floor(currentOption/2)][1];
        flashBox('box2');
        currentBox = 1;
    }
});
