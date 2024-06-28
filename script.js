document.getElementById('reset').addEventListener('click', () => {
    document.querySelector('.flexbox').style = '';
    document.getElementById('gap').value = 0;
    document.getElementById('box1').value = 0;
    document.getElementById('box2').value = 0;
    document.getElementById('box3').value = 0;
});

document.getElementById('gap').addEventListener('input', (event) => {
    document.querySelector('.flexbox').style.gap = `${event.target.value}px`;
});

document.getElementById('row').addEventListener('click', () => {
    document.querySelector('.flexbox').style.flexDirection = 'row';
});

document.getElementById('column').addEventListener('click', () => {
    document.querySelector('.flexbox').style.flexDirection = 'column';
});

document.getElementById('start').addEventListener('click', () => {
    document.querySelector('.flexbox').style.justifyContent = 'flex-start';
});

document.getElementById('center').addEventListener('click', () => {
    document.querySelector('.flexbox').style.justifyContent = 'center';
});

document.getElementById('end').addEventListener('click', () => {
    document.querySelector('.flexbox').style.justifyContent = 'flex-end';
});

document.getElementById('space-between').addEventListener('click', () => {
    document.querySelector('.flexbox').style.justifyContent = 'space-between';
});

document.getElementById('space-around').addEventListener('click', () => {
    document.querySelector('.flexbox').style.justifyContent = 'space-around';
});

document.getElementById('space-evenly').addEventListener('click', () => {
    document.querySelector('.flexbox').style.justifyContent = 'space-evenly';
});

document.getElementById('align-start').addEventListener('click', () => {
    document.querySelector('.flexbox').style.alignItems = 'flex-start';
});

document.getElementById('align-center').addEventListener('click', () => {
    document.querySelector('.flexbox').style.alignItems = 'center';
});

document.getElementById('align-end').addEventListener('click', () => {
    document.querySelector('.flexbox').style.alignItems = 'flex-end';
});

document.getElementById('grow-reset').addEventListener('click', () => {
    document.querySelectorAll('.box').forEach(box => box.style.flexGrow = 0);
    document.getElementById('box1').value = 0;
    document.getElementById('box2').value = 0;
    document.getElementById('box3').value = 0;
});

document.getElementById('grow-all').addEventListener('click', () => {
    document.querySelectorAll('.box').forEach(box => box.style.flexGrow = 1);
    document.getElementById('box1').value = 1;
    document.getElementById('box2').value = 1;
    document.getElementById('box3').value = 1;
});

document.getElementById('box1').addEventListener('input', (event) => {
    document.querySelector('#box1').style.flexGrow = event.target.value;
});

document.getElementById('box2').addEventListener('input', (event) => {
    document.querySelector('#box2').style.flexGrow = event.target.value;
});

document.getElementById('box3').addEventListener('input', (event) => {
    document.querySelector('#box3').style.flexGrow = event.target.value;
});
