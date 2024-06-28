document.getElementById('reset').addEventListener('click', () => {
    document.querySelector('.flexbox').style.flexDirection = 'row';
    document.querySelector('.flexbox').style.justifyContent = 'flex-start';
    document.querySelector('.flexbox').style.alignItems = 'stretch';
    document.querySelector('.flexbox').style.gap = '0px';
    document.querySelectorAll('.box').forEach(box => box.style.flexGrow = 0);
    document.getElementById('gap').value = 0;
    document.getElementById('box1').value = 0;
    document.getElementById('box2').value = 0;
    document.getElementById('box3').value = 0;
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

document.getElementById('gap').addEventListener('input', (e) => {
    document.querySelector('.flexbox').style.gap = e.target.value + 'px';
});

document.getElementById('grow-reset').addEventListener('click', () => {
    document.querySelectorAll('.box').forEach(box => box.style.flexGrow = 0);
    document.getElementById('box1').value = 0;
    document.getElementById('box2').value = 0;
    document.getElementById('box3').value = 0;
});

document.getElementById('grow-all').addEventListener('click', () => {
    document.querySelectorAll('.box').forEach(box => box.style.flexGrow = 1);
});

document.getElementById('box1').addEventListener('input', (e) => {
    document.getElementById('flexbox1').style.flexGrow = e.target.value;
});

document.getElementById('box2').addEventListener('input', (e) => {
    document.getElementById('flexbox2').style.flexGrow = e.target.value;
});

document.getElementById('box3').addEventListener('input', (e) => {
    document.getElementById('flexbox3').style.flexGrow = e.target.value;
});
