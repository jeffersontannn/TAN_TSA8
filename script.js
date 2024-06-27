function applyFlexbox() {
 const flexContainer = document.getElementById('flex-container');
 const gap = document.getElementById('gap').value + 'px';
 const flexDirection = document.getElementById('flex-direction').value;
 const justifyContent = document.getElementById('justify-content').value;
 const alignItems = document.getElementById('align-items').value;
 flexContainer.style.gap = gap;
 flexContainer.style.flexDirection = flexDirection;
 flexContainer.style.justifyContent = justifyContent;
 flexContainer.style.alignItems = alignItems;
}
