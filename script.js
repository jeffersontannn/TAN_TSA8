function resetFlexbox() {
 document.getElementById('gap').value = 0;
 setFlexDirection('row');
 setJustifyContent('flex-start');
 setAlignItems('flex-start');
 resetFlexGrow();
}
function setFlexDirection(direction) {
 document.getElementById('flex-container').style.flexDirection = direction;
}
function setJustifyContent(content) {
 document.getElementById('flex-container').style.justifyContent = content;
}
function setAlignItems(items) {
 document.getElementById('flex-container').style.alignItems = items;
}
function resetFlexGrow() {
 document.getElementById('box1-grow').value = 0;
 document.getElementById('box2-grow').value = 0;
 document.getElementBy
