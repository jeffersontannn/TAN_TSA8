document.addEventListener('DOMContentLoaded', function () {
    const flexContainer = document.getElementById('flex-container');
    const gapInput = document.getElementById('gap');
    const grow1 = document.getElementById('grow1');
    const grow2 = document.getElementById('grow2');
    const grow3 = document.getElementById('grow3');
    gapInput.addEventListener('input', updateGap);
    grow1.addEventListener('input', updateFlexGrow);
    grow2.addEventListener('input', updateFlexGrow);
    grow3.addEventListener('input', updateFlexGrow);
    function updateGap() {
        flexContainer.style.gap = `${gapInput.value}px`;
    }
    function updateFlexGrow() {
        document.getElementById('item1').style.flexGrow = grow1.value;
        document.getElementById('item2').style.flexGrow = grow2.value;
        document.getElementById('item3').style.flexGrow = grow3.value;
    }
    window.updateFlexDirection = function (direction) {
        flexContainer.style.flexDirection = direction;
    };
    window.updateJustifyContent = function (justify) {
        flexContainer.style.justifyContent = justify;
    };
    window.updateAlignItems = function (align) {
        flexContainer.style.alignItems = align;
    };
    window.resetFlexGrow = function () {
        grow1.value = 0;
        grow2.value = 0;
        grow3.value = 0;
        updateFlexGrow();
    };
    window.growAll = function () {
        grow1.value = 1;
        grow2.value = 1;
        grow3.value = 1;
        updateFlexGrow();
    };
    window.resetFlexbox = function () {
        flexContainer.style.flexDirection = 'row';
        flexContainer.style.justifyContent = 'flex-start';
        flexContainer.style.alignItems = 'flex-start';
        gapInput.value = 0;
        updateGap();
        resetFlexGrow();
    };
 });
